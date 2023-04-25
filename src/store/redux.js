import { createStore } from "redux";
import { ref, set } from "firebase/database";

import { database } from "./firebase";
import STORIES from "../data/stories";

const initialState = {
  posts: [],
  stories: STORIES,
  mobileMenuOpened: false,
  isAuthenticated: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
        posts: [...action.payload.posts],
      };

    case "HANDLE_POST_LIKE":
      const userId = action.payload.userId;
      const postId = action.payload.postId;
      const currentPost = state.posts.find((post) => post.id === postId);
      const userHasLiked = currentPost.likedBy.includes(userId);

      const likedByRef = ref(database, `posts/${postId}/likedBy`);

      if (userHasLiked) {
        set(
          likedByRef,
          currentPost.likedBy.filter((id) => id !== userId)
        );
      } else {
        set(likedByRef, [...currentPost.likedBy, userId]);
      }

      const updatedPosts = state.posts.map((post) => {
        if (post.id === postId) {
          const newLikedBy = userHasLiked
            ? currentPost.likedBy.filter((id) => id !== userId)
            : [...currentPost.likedBy, userId];

          // Only create a new post object if the likedBy array is actually changed
          return newLikedBy === currentPost.likedBy
            ? post
            : { ...post, liked: !userHasLiked, likedBy: newLikedBy };
        }

        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
