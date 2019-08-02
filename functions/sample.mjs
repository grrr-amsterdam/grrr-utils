/**
 * Grab a random item from a collection.
 */
const sample = xs => xs[Math.floor(xs.length * Math.random())];

export default sample;
