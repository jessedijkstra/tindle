import * as Types from './Types';
import { refreshToken, userUid } from '../config/user';
import { getContent as getContentAPI } from '../api/content';

export function get(itemUid) {
  return dispatch => (
    getContentAPI(refreshToken, userUid, itemUid)
      .then((content)=> {
        console.log(content);
        dispatch({ type: Types.GET_CONTENT_OK, id: itemUid, content });
      })
  );
}
