/**
 * Creates a new function, reversing the outcome of the original given function.
 */
const not = f => (...args) => !f(...args);

export default not;
