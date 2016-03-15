import { LOGIN_OK, LOGOUT } from '../actions/Types';
import { LOAD } from 'redux-storage';

const initialState = '';

export default function refreshToken(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return payload.refreshToken || initialState;

    case LOGOUT:
      return initialState;

    case LOGIN_OK:
      return payload.refresh_token;

    default:
      return state;
  }
}
