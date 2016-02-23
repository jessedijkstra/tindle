import { curry } from 'ramda';

const url = (userUid)=> (
  `https://ws.blendle.com/user/${userUid}/items`
);

export const acquireItemWithJWT = curry((userUid, itemUid, jwt)=> {
  return fetch(url(userUid), {
    method: 'post',
    headers: {
      'Accept': 'application/hal+json',
      'Content-Type': 'application/hal+json',
      'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify({ id: itemUid })
  });
});

export const acquireItem = curry((refreshToken, userUid, itemUid)=> (
  getJWT(refreshToken).then(acquireItemWithJWT(userUid, itemUid))
));
