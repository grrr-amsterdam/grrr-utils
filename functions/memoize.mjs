import curry from './curry.mjs';

/**
 * Store results of function calls and return the cache when input arguments
 * are the same.
 */
const memoize = curry(fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
});

export default memoize;
