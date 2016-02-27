import { getJWT } from './jwt';
import { curry } from 'ramda';

const getContentWithJWT = curry((userUid, itemUid, { jwt })=> {
  return fetch(`https://ws.blendle.com/user/${userUid}/items`, {
    method: 'post',
    headers: {
      'Accept': 'application/hal+json',
      'Content-Type': 'application/hal+json',
      'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify({ id: itemUid })
  })
    .then(()=> fetch(`https://ws.blendle.com/item/${itemUid}/content`, {
      headers: {
        'Accept': 'application/hal+json',
        'Content-Type': 'application/hal+json',
        'Authorization': `Bearer ${jwt}`
      }
    }))
    .then((response)=> {
      if (response.ok) {
        return Promise.resolve(JSON.parse(response._bodyText));
      }

      return Promise.reject(response);
    });
});

export const getContent = (refreshToken, userUid, itemUid)=> {
  return getJWT(refreshToken).then(getContentWithJWT(userUid, itemUid));
}
