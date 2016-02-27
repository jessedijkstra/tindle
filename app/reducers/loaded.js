import * as Types from '../actions/Types';

const initialState = false;

export default function loaded(state = initialState, action = {}) {
  const { type } = action;
  const current = state;

  switch (action.type) {
    case Types.GET_TIMELINE_OK:
      return (id === state ? initialState : id);

    default:
      return state;
  }
}
