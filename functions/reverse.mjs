/**
 * Return a reversed array of a collection.
 */
const reverse = ([x, ...xs]) => x ? [...reverse(xs), x] : [];

export default reverse;
