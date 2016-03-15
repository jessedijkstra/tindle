import * as Types from '../actions/Types';

const initialState = 'latest';

export default function contents(state = initialState, action = {}) {
  const { type, filter } = action;

  switch (type) {
    case Types.SET_FILTER:
      return filter;

    default:
      return state;
  }
}
