import { createStore } from "redux";
import { ref, get, set, push } from "firebase/database";
import moment from "moment";

import { auth, database } from "./firebase";

const initialState = {
    posts: [],
    mobileMenuOpened: false,
    isAuthenticated: false,
    darkModeOn: window.matchMedia('(prefers-color-scheme: dark)').matches
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: true
            };

        case "UNAUTHENTICATE":
            return {
                ...state,
                isAuthenticated: false
            };

        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload.posts
            };

        case "ADD_POST": {
            const userId = auth.currentUser?.uid;
            if (!userId) return state;

            const title = action.payload.title;

            const postsRef = ref(database, 'posts');
            const newPostRef = push(postsRef, {});
            const newPost = {
                id: newPostRef.key,
                avatar: 'user',
                user: {
                    id: auth.currentUser.uid,
                    name: auth.currentUser.email
                },
                date: moment().toISOString(),
                title
            };
            set(newPostRef, newPost);

            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }

        case "HANDLE_POST_LIKE": {
            const userId = auth.currentUser?.uid;
            if (!userId) return state;

            const postId = action.payload.postId;
            const post = state.posts.find(post => post.id === postId);
            if (!post) return state;

            const userHasLiked = post.likes?.includes(userId);

            // New likes
            let likes;
            if (post.likes) {
                if (userHasLiked) likes = post.likes.filter(id => id !== userId); // unlike the post
                else likes = [userId, ...post.likes]; // like the post
            }
            else likes = [userId]; // first like

            // Update Database
            const likesRef = ref(database, `posts/${postId}/likes`);
            set(likesRef, likes)
                .then(response => {})
                .catch(error => console.error('Transaction failed: ', error));

            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === postId ? { ...post, likes } : post
                )
            };
        }

        case "HANDLE_POST_COMMENT": {
            const postId = action.payload.postId;
            const post = state.posts.find(post => post.id === postId);
            const comment = action.payload.comment;

            const newComment = {
                id: crypto.randomUUID(),
                comment,
                date: moment().toISOString(),
                user: {
                    id: auth.currentUser.uid,
                    name: auth.currentUser.email
                }
            }
            const existingComments = post.comments || [];
            const updatedComments = [newComment, ...existingComments];

            // Fetch existing comments
            const commentsRef = ref(database, `posts/${postId}/comments`);
            get(commentsRef).then(snapshot => {
                set(commentsRef, updatedComments)
                    .then(response => {})
                    .catch(error => console.error(error));
            });

            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === postId
                        ? { ...post, comments: updatedComments }
                        : post
                )
            };
        }

        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkModeOn: !state.darkModeOn
            };

        case "TOGGLE_MOBILE_MENU":
            return {
                ...state,
                mobileMenuOpened: !state.mobileMenuOpened
            };

        default: return state;
    }
}

const store = createStore(reducer);

export default store;
