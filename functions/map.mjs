import curry from './curry';

/**
 * Curried map implementation.
 */
const map = curry((f, xs) => xs.map(f));

export default map;
