/**
 * Curry a function. Will keep returning functions until the originally required arity has been
 * reached.
 */
const curry = fn =>
  (...args) => args.length < fn.length
    ? curry(fn.bind(null, ...args))
    : fn(...args);

export default curry;
