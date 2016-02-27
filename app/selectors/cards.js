import { init, flatten, last, without as rWithout } from 'ramda';

export const without = (...args)=> rWithout(flatten(init(args)), last(args));
