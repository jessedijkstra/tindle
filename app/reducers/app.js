import { LOAD, SAVE } from 'redux-storage';

const initialState = { loaded: false };

export default function app(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case LOAD:
      return { ...state, loaded: true };

    case SAVE:
      return { ...state, saved: new Date().toISOString() };

    default:
      return state;
  }
}
