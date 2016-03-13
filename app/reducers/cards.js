import * as Types from '../actions/Types';
import { LOAD } from 'redux-storage';
import { manifests } from '../selectors/trending';
import { uniq, flatten, without, map, prop } from 'ramda';

const initialState = {
  latest: [],
  pinned: [],
  removed: [],
  active: null
};

export default function cards(state = initialState, action = {}) {
  const { type, id, payload } = action;

  switch (action.type) {
    case LOAD:
      return payload.cards;

    case Types.TOGGLE_CARD:
      return {
        ...state,
        active: (id === state.active ? null : id)
      };

    case Types.GET_TIMELINE_OK:
      return {
        ...state,
        latest: without(
          flatten([state.pinned, state.removed]),
          map(prop('id'), manifests(action.trending))
        )
      };

    case Types.PIN_CARD:
      return {
        ...state,
        latest: without(id, state.latest),
        pinned: uniq([id, ...state.pinned]),
        removed: without(id, state.removed)
      };

    case Types.REMOVE_CARD:
      return {
        ...state,
        latest: without(id, state.latest),
        pinned: without(id, state.pinned),
        removed: uniq([id, ...state.removed])
      };

    default:
      return state;
  }
}
