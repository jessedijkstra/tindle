import { LOGIN_OK, LOGOUT } from '../actions/Types';
import { LOAD } from 'redux-storage';

const initialState = {};

export default function user(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return payload.user;

    case LOGOUT:
      return initialState;

    case LOGIN_OK:
      return payload._embedded.user;

    default:
      return state;
  }
}
