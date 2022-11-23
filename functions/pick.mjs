import curry from './curry.mjs';

/**
 * Return a partial copy of an object containing only the keys specified.
 */
const pick = curry((keys, o) =>
  keys.filter(key => key in o)
    .reduce((acc, key) => ({ ...acc, [key]: o[key] }), {}));

export default pick;
