import curry from './curry';

/**
 * Grab the first n items of a collection.
 */
const take = curry((n, [x, ...xs]) => x && n ? [x, ...take(n - 1, xs)] : []);

export default take;
