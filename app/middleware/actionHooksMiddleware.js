import { curry } from 'ramda';

export default curry((hooks, store, next, action)=> {
  const result = next(action);

  if (hooks[action.type]) {
    hooks[action.type](action, store.getState);
  }

  return result;
});
