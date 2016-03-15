import {
  loginWithCredentials as loginWithCredentialsAPI,
  loginWithRefreshToken as loginWithRefreshTokenAPI
} from '../api/login';
import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_PENDING, LOGIN_OK, LOGIN_ERROR } from './Types';

export function setEmail(email) {
  return { type: LOGIN_EMAIL, payload: email };
}

export function setPassword(password) {
  return { type: LOGIN_PASSWORD, payload: password };
}

export function loginPending(credentials) {
  return { type: LOGIN_PENDING, payload: credentials };
}

export function loginSuccess(authorization) {
  return { type: LOGIN_OK, payload: authorization };
}

export function loginError(errors) {
  return { type: LOGIN_ERROR, payload: errors };
}

export const loginWithUsernameAndPassword = (login, password) => (dispatch) => {
  dispatch(loginPending({ login, password }));

  return loginWithCredentialsAPI({ login, password })
    .then((authorization) => dispatch(loginSuccess(authorization)))
    .catch((error) => {
      dispatch(loginError(error));

      if (error.status !== 401) {
        throw error;
      }
    });
};

export const loginWithRefreshToken = (refreshToken) => (dispatch) => {
  dispatch(loginPending({ refreshToken }));

  return loginWithRefreshTokenAPI(refreshToken)
    .then((authorization) => dispatch(loginSuccess(authorization)))
    .catch((error) => {
      dispatch(loginError(error));

      if (error.status !== 401) {
        throw error;
      }
    });
};
