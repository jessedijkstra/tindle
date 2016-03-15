import * as Types from '../actions/Types';

const initialState = [];

export default function contents(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case Types.GET_CONTENT_OK:
      return [...state, action.content._embedded.content];

    default:
      return state;
  }
}
