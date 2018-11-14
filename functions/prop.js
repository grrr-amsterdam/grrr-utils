import curry from './curry';

/**
 * Getter of properties.
 *
 * prop :: a -> Object -> b
 */
const prop = curry((property, o) => o[property]);

export default prop;
