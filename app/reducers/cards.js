import * as Types from '../actions/Types';
import { manifests } from '../selectors/trending';
import { find, whereEq } from 'ramda';

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
      return manifests(action.trending).map((manifest, index)=> ({
        id: manifest.id,
        manifest,
        readLater: false,
        remove: false
      }));

    case Types.READ_LATER_CARD:
      return updateCard(state, id, { readLater: true, active: false, remove: false });

    case Types.REMOVE_CARD:
      return updateCard(state, id, { remove: true, active: false, readLater: false });

    case Types.GET_CONTENT_OK:
      return updateCard(state, id, { active: true })

    case Types.TOGGLE_CARD:
      return updateCard(state, id, { active: !current.active });

    default:
      return state;
  }
}
