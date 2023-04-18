import { createStore } from "redux";

import POSTS from "../data/posts";
import STORIES from "../data/stories";

const initialState = {
  posts: POSTS,
  stories: STORIES,
  mobileMenuOpened: false,
  isAuthenticated: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_POST_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              liked: !post.liked,
              likeCount: post.likeCount + (post.liked ? -1 : 1),
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

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
