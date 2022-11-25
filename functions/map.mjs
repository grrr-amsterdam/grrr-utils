import curry from './curry.mjs';

/**
 * Curried map implementation.
 */
const map = curry((f, xs) => xs.map(f));

export default map;
