import * as Types from './Types';
import { getContent as getContentAPI } from '../api/content';
import { refreshTokenFromStore } from '../selectors/refreshToken';
import { userUidFromStore } from '../selectors/user';

export function get(itemUid) {
  return (dispatch, getState) => (
    getContentAPI(refreshTokenFromStore(getState()), userUidFromStore(getState()), itemUid)
      .then((content) => {
        dispatch({ type: Types.GET_CONTENT_OK, id: itemUid, content });
      })
  );
}
