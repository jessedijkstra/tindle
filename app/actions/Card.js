import * as Types from './Types';
import { get as getContent } from '../actions/Content';
import { pin } from '../actions/Item';

function process(type, id, delta) {
  return { type, id, delta };
}

export function remove(id, delta) {
  return dispatch => {
    if (delta < 0) {
      return dispatch(process(Types.REMOVE_CARD, id, delta));
    }

    dispatch(process(Types.PIN_CARD, id, delta));

    return dispatch(pin(id));
  };
}

export function toggle(id, active) {
  return (dispatch) => {
    dispatch(process(Types.TOGGLE_CARD, id));

    if (!active) {
      return dispatch(getContent(id));
    }

    return null;
  };
}

export function move(id, delta) {
  return process(Types.MOVE_CARD, id, delta);
}
