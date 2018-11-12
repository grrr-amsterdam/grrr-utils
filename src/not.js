/**
 * Creates a new function, reversing the outcome of the original given function.
 *
 * not :: (a -> Boolean) -> (a -> Boolean)
 */
const not = f => (...args) => !f(...args);

export default not;
