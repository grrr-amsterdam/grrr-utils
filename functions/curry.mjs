/**
 * Curry a function. Will keep returning functions until the originally required arity has been
 * reached.
 *
 * curry :: (a -> b) -> (a -> b)
 */
const curry = fn =>
  (...args) => args.length < fn.length
    ? curry(fn.bind(null, ...args))
    : fn(...args);

export default curry;
