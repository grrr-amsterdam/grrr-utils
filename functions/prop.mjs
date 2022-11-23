import curry from './curry.mjs';

/**
 * Getter of properties.
 */
const prop = curry((property, o) => o[property]);

export default prop;
