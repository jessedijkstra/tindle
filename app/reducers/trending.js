import * as Types from '../actions/Types';

const initialState = [];

export default function timeline(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case Types.GET_TIMELINE_OK:
      return action.trending;

    case Types.PIN_ITEM_OK:
      return state;

    case Types.PIN_ITEM_ERROR:
      return state;

    default:
      return state;
  }
}
