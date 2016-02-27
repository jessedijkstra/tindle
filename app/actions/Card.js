import * as Types from './Types';
import { get as getContent } from '../actions/Content';

function process (type, id, delta) {
  return { type, id, delta };
}

export function remove (id, delta) {
  if (delta < 0) {
    return process(Types.REMOVE_CARD, id, delta);
  }

  return process(Types.READ_LATER_CARD, id, delta);
}

export function toggle (id, active) {
  return dispatch =>  {
    dispatch(process(Types.TOGGLE_CARD, id));

    if (!active) {
      return dispatch(getContent(id));
    }
  }
}

export function move (id, delta) {
  return process(Types.MOVE_CARD, id, delta);
}
