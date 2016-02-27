import { PIN_ITEM_OK, PIN_ITEM_ERROR } from './Types';
import { refreshToken, userUid } from '../config/user';
import { pinItem as pinItemAPI } from '../api/item';

export function pin(itemUid) {
  return dispatch => {
    dispatch({ type: PIN_ITEM_OK, id: itemUid });

    return pinItemAPI(refreshToken, userUid, itemUid)
      .catch((error)=> {
        dispatch({ type: PIN_ITEM_ERROR, id: itemUid });

        return Promise.reject(error);
      });
  };
}
