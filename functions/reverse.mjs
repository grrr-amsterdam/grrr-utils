/**
 * Return a reversed array.
 */
const reverse = ([x, ...xs]) => x ? [...reverse(xs), x] : [];

export default reverse;
