import {
  LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_OK, LOGIN_ERROR, LOGIN_PENDING
} from '../actions/Types';

const initialState = { };

export default function login(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_EMAIL:
      return { ...state, email: payload };

    case LOGIN_PASSWORD:
      return { ...state, password: payload };

    case LOGIN_OK:
      return { ...state, status: 'OK', data: payload };

    case LOGIN_PENDING:
      return { ...state, status: 'PENDING' };

    case LOGIN_ERROR:
      return { ...state, status: 'ERROR', error: payload };

    default:
      return state;
  }
}
