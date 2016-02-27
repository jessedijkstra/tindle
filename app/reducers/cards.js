import * as Types from '../actions/Types';
import { manifests } from '../selectors/trending';
import { find, whereEq, map, prop } from 'ramda';

const initialState = [];

function updateCard(state, id, values) {
  return state.map((card)=> {
    if (card.id === id) {
      return { ...card, ...values };
    }

    return card;
  });
}

export default function cards(state = initialState, action = {}) {
  const { type, id } = action;
  const current = find(whereEq({ id }), state);

  switch (action.type) {
    case Types.GET_TIMELINE_OK:
      return map(prop('id'), manifests(action.trending));

    default:
      return state;
  }
}
