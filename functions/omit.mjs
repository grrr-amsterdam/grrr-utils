import curry from './curry';

/**
 * Return a partial copy of an object omitting the keys specified.
 */
const omit = curry((keys, o) =>
  Object.keys(o).reduce((acc, key) => (
    keys.includes(key) ? acc : { ...acc, [key]: o[key] }
  ), {}));

export default omit;
