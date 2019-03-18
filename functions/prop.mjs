import curry from './curry';

/**
 * Getter of properties.
 */
const prop = curry((property, o) => o[property]);

export default prop;
