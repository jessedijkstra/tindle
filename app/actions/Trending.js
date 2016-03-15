import * as Types from './Types';
import { getTrending as getTrendingAPI } from '../api/trending';
import { refreshTokenFromStore } from '../selectors/refreshToken';
import { userUidFromStore } from '../selectors/user';

export function getTrending() {
  return (dispatch, getState) => (
    getTrendingAPI(refreshTokenFromStore(getState()), userUidFromStore(getState()))
      .then((trending) => {
        dispatch({
          type: Types.GET_TIMELINE_OK,
          trending
        });

        return Promise.resolve(trending);
      })
      .catch((response) => {
        dispatch({ type: Types.GET_TIMELINE_ERROR, error: true });

        return Promise.reject(response);
      })
  );
}
