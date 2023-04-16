import { createStore } from "redux";

import POSTS from "../data/posts";
import STORIES from "../data/stories";

const initialState = {
  posts: POSTS,
  stories: STORIES,
  mobileMenuOpened: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              liked: true,
            };
          }
          return post;
        }),
      };
    case "UNLIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              liked: false,
              likeCount:  post.likeCount + 1,
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

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
