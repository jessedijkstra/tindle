import { propEq, path, pathOr, pipe, find } from 'ramda';

export const image = pipe(
  pathOr([], ['images']),
  find(propEq('featured', true)),
  path(['_links', 'large'])
);
