import * as Types from '../actions/Types';
import { uniq, without } from 'ramda';
const initialState = [];

export default function removed(state = initialState, action = {}) {
  const { type, id } = action;

  switch (action.type) {
    case Types.REMOVE_CARD:
      return uniq([id, ...state]);

    case Types.PIN_CARD:
      return without(id, state);

    case Types.POPULATE_STORAGE:
      return action.removed || initialState;

    default:
      return state;
  }
}
