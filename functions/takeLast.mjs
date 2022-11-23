import curry from './curry.mjs';

/**
 * Grab the last n items of a collection.
 */
const takeLast = curry((n, xs) => n > xs.length
  ? [...xs]
  : n
    ? [xs[xs.length - n], ...takeLast(n - 1, xs)]
    : []);

export default takeLast;
