import { LOGOUT, LOGIN_OK } from '../actions/Types';

const initialState = false;

export default function login(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case LOGIN_OK:
      return true;

    case LOGOUT:
      return false;

    default:
      return state;
  }
}
