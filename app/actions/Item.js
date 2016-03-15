import { PIN_ITEM_OK, PIN_ITEM_ERROR } from './Types';
import { pinItem as pinItemAPI } from '../api/item';
import { refreshTokenFromStore } from '../selectors/refreshToken';
import { userUidFromStore } from '../selectors/user';

export function pin(itemUid) {
  return (dispatch, getState) => {
    dispatch({ type: PIN_ITEM_OK, id: itemUid });

    return pinItemAPI(refreshTokenFromStore(getState()), userUidFromStore(getState()), itemUid)
      .catch((error) => {
        dispatch({ type: PIN_ITEM_ERROR, id: itemUid });

        return Promise.reject(error);
      });
  };
}
