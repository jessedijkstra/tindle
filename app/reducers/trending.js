import * as Types from '../actions/Types';

const initialState = [];

export default function timeline(state = initialState, action = {}) {
  switch (action.type) {
    case Types.GET_TIMELINE_OK:
      return action.trending;
    default:
      return state;
  }
}
