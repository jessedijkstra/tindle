import { getJWT } from './jwt';

export const loginWithCredentials = (credentials) => (
  fetch('https://ws.blendle.com/credentials', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/hal+json'
    },
    body: JSON.stringify(credentials)
  })
  .then((response) => {
    if (response.ok) {
      return Promise.resolve(JSON.parse(response._bodyText));
    }

    return Promise.reject(response);
  })
);

export const loginWithRefreshToken = (refreshToken) => (
  getJWT(refreshToken).then((response) => ({ refresh_token: refreshToken, ...response }))
);
