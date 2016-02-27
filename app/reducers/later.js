import * as Types from '../actions/Types';
import { uniq } from 'ramda';
const initialState = [];

export default function removed(state = initialState, action = {}) {
  const { type, id } = action;

  switch (action.type) {
    case Types.READ_LATER_CARD:
      return uniq([id, ...state]);

    default:
      return state;
  }
}