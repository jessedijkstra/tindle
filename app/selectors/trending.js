import { map, pipe, path, pathOr, find, whereEq } from 'ramda';

export const manifests = pipe(
  pathOr([], ['_embedded', 'b:tiles']),
  map(path(['_embedded', 'b:item', '_embedded', 'manifest']))
);

export const manifest = (id, trending) => (
  find(whereEq({ id }), manifests(trending))
);
