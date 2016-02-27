import { curry } from 'ramda';
import { getJWT } from './jwt';

const itemsUrl = (userUid)=> (
  `https://ws.blendle.com/user/${userUid}/items`
);

const pinItemUrl = (userUid, itemUid)=> (
  `https://ws.blendle.com/user/${userUid}/pin/${itemUid}`
);

export const acquireItemWithJWT = curry((userUid, itemUid, jwt)=> fetch(itemsUrl(userUid), {
  method: 'post',
  headers: {
    'Accept': 'application/hal+json',
    'Content-Type': 'application/hal+json',
    'Authorization': `Bearer ${jwt}`
  },
  body: JSON.stringify({ id: itemUid })
}));

export const updatePinItemWithJWT = curry((userUid, itemUid, body, jwt)=> fetch(pinItemUrl(userUid, itemUid), {
  method: 'put',
  headers: {
    'Accept': 'application/hal+json',
    'Content-Type': 'application/hal+json',
    'Authorization': `Bearer ${jwt}`
  },
  body: JSON.stringify(body)
}));

export const unpinItem = curry((refreshToken, userUid, itemUid) => (
  getJWT(refreshToken).then(updatePinItemWithJWT(userUid, itemUid, { pinned: false }))
));

export const pinItem = curry((refreshToken, userUid, itemUid) => (
  getJWT(refreshToken).then(updatePinItemWithJWT(userUid, itemUid, { pinned: true }))
));

export const acquireItem = curry((refreshToken, userUid, itemUid)=> (
  getJWT(refreshToken).then(acquireItemWithJWT(userUid, itemUid))
));
