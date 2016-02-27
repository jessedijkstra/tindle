import * as Types from '../actions/Types';

const initialState = null;

export default function active(state = initialState, action = {}) {
  const { type, id } = action;
  const current = state;

  switch (action.type) {
    case Types.TOGGLE_CARD:
      return (id === state ? initialState : id);

    default:
      return state;
  }
}
