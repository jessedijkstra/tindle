import { curry, flip, pipe } from 'ramda';
import asyncStorageMiddleware from './asyncStorageMiddleware';
import { REMOVE_CARD } from '../actions/Types';
import { itemIds } from '../selectors/cards';

const keys = ['removed'];

export default flip(asyncStorageMiddleware)({
  [REMOVE_CARD]: (storage, action, store)=> {
    storage.setItem(
      '@TINDLE:STORAGE',
      JSON.stringify({ removedCards: store().removed })
    );
  }
});
