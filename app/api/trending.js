import { curry } from 'ramda';
import { getJWT } from './jwt';

const url = (userUid) => `https://ws.blendle.com/user/${userUid}/tiles/following?user_context=${userUid}&zoom=b%3Atiles%2Cb%3Aitem%2Cmanifest%2Cb%3Aacquisition%2Cb%3Apin`;

const getTrendingWithJWT = curry((userUid, { jwt }) => (
  fetch(url(userUid), {
    method: 'get',
    headers: {
      'Accept': 'application/hal+json',
      'Content-Type': 'application/hal+json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then((response) => {
    if (response.ok) {
      return Promise.resolve(JSON.parse(response._bodyText));
    }

    return Promise.reject(response);
  })
));

export const getTrending = (refreshToken, userUid) => (
  getJWT(refreshToken).then(getTrendingWithJWT(userUid))
);
