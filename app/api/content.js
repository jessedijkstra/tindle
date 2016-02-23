import { getJWT } from './jwt';
import { curry } from 'ramda';
import { OFFLINE } from '../config/app';
import { CONTENT } from '../fixtures/content';

const getContentWithJWT = curry((userUid, itemUid, jwt)=> {
  return new Promise((resolve, reject)=> {
    if (OFFLINE) {
      return resolve(CONTENT[itemUid]);
    }

    console.warn('Implement this method');
  });
});

export const getContent = (refreshToken, userUid, itemUid)=> {
  return getJWT(refreshToken).then(getContentWithJWT(userUid, itemUid));
}
