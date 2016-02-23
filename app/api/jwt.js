import { OFFLINE } from '../config/app';
import { JWT } from '../fixtures/jwt';

export function getJWT(refreshToken) {
  if (OFFLINE) {
    return Promise.resolve(JWT);
  }

  return fetch('https://ws.blendle.com/tokens', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      refresh_token: refreshToken
    })
  }).then((response)=> response.json());
}
