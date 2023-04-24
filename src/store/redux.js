import { createStore } from "redux";
import { ref } from "firebase/database";

import { database } from "./firebase";
import STORIES from "../data/stories";

console.log(database);

const initialState = {
  posts: [],
  stories: STORIES,
  mobileMenuOpened: false,
  isAuthenticated: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_POST_LIKE":
      const postId = action.payload.postId;
      const userId = action.payload.userId;
      const postLiked = state.posts.find((post) => post.id === postId).liked;
      const postRef = ref(database, `posts/${postId}`);
      const likeCountRef = postRef.child("likeCount");
      const likedByRef = postRef.child("likedBy");

      if (postLiked) {
        likeCountRef.transaction((count) => count - 1);
        likedByRef.child(userId).remove();
      } else {
        likeCountRef.transaction((count) => count + 1);
        likedByRef.child(userId).set(true);
      }

      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              liked: !postLiked,
              likeCount: post.likeCount + (postLiked ? -1 : 1),
            };
          }
          return post;
        }),
      };

    case "TOGGLE_MOBILE_MENU":
      return {
        ...state,
        mobileMenuOpened: !state.mobileMenuOpened,
      };

    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: true,
      };

    case "UNAUTHENTICATE":
      return {
        ...state,
        isAuthenticated: false,
      };

    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload.posts,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
