import { AsyncStorage } from 'react-native';
import { POPULATE_STORAGE } from './Types';

export function populate () {
  return dispatch => {
    return AsyncStorage
      .getItem('@TINDLE:STORAGE')
      .then((value)=> dispatch({
        type: POPULATE_STORAGE,
        ...JSON.parse(value)
      }))
  }
}
