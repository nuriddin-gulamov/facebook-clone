import { createStore } from "redux";

import STORIES from "../data/stories";
import POSTS from "../data/posts";

const initialState = {
  mobileMenuOpened: false,
  stories: STORIES,
  posts: POSTS,
};

function reducer(state = initialState, action) {
  if (action.type === "OpenMobileMenu") {
    return {
      mobileMenuOpened: true,
      stories: state.stories,
      posts: state.posts,
    };
  }
  if (action.type === "CloseMobileMenu") {
    return {
      mobileMenuOpened: false,
      stories: state.stories,
      posts: state.posts,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
