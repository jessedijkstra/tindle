import { find, whereEq } from 'ramda';

export const content = (id, contents = [])=> (
  find(whereEq({ id }), contents)
);
