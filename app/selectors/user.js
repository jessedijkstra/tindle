import { prop, pipe } from 'ramda';
export const userFromStore = prop('user');
export const userUid = prop('id');
export const userUidFromStore = pipe(userFromStore, userUid);
