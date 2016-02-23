import { find, whereEq } from 'ramda';
import * as Types from '../actions/Types';

const initialState = [];

export default function contents(state = initialState, action = {}) {
  const { type, id } = action;
  const current = find(whereEq({ id }), state);

  switch (action.type) {
    case Types.GET_CONTENT_OK:
      return [...state, action.content._embedded.content];

    default:
      return state;
  }
}
