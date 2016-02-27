import actionHooksMiddleware from './actionHooksMiddleware';
import { curry, map, partial, flip } from 'ramda';

const applyStorage = flip(partial);

export default curry((storage, hooks, next, action)=> {
  return actionHooksMiddleware(
    map(applyStorage([storage]), hooks),
    next,
    action
  );
});
