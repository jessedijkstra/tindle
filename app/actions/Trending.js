import * as Types from './Types';
import { refreshToken, userUid } from '../config/user';
import { getTrending as getTrendingAPI } from '../api/trending';

export function getTrending() {
  return dispatch => (
    getTrendingAPI(refreshToken, userUid)
      .then((trending)=> {
        dispatch({
          type: Types.GET_TIMELINE_OK,
          trending
        });

        return Promise.resolve(trending);
      })
      .catch((response)=> {
        dispatch({ type: Types.GET_TIMELINE_ERROR, error: true });

        return Promise.reject(response);
      })
  );
}
