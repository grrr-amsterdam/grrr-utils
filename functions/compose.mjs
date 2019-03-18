/**
 * Composer of functions. Will accept 0 or more functions.
 */
export default (...fns) => arg =>
  fns.reduceRight(
    (acc, fn) => fn(acc),
    arg
  );
