import { curry, path, pipe, whereEq, propEq } from 'ramda';

export const filters = {
  active: whereEq({ readLater: false, remove: false }),
  readLater: propEq('readLater', true),
  remove: propEq('remove', true),
  read: propEq('read', true),
}

export const filter = curry((type, cards)=> cards.filter(filters[type]));
