import curry from './curry';

/**
 * Curried map implementation.
 *
 * map :: (a -> b) -> [a] -> [b]
 */
const map = curry((f, xs) => xs.map(f));

export default map;
