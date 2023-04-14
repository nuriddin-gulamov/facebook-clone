import { createStore } from 'redux';

const initialState = {
  mobileMenuOpened: false,
};

function reducer(state = initialState, action) {
  if (action.type === 'OpenMobileMenu') {
    return { mobileMenuOpened: true };
  }
  if (action.type === 'CloseMobileMenu') {
    return { mobileMenuOpened: false };
  }

  return state;
}

const store = createStore(reducer);

export default store;
