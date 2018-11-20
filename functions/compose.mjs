/**
 * Composer of functions. Will accept 0 or more functions.
 *
 * compose :: (a -> b) -> (b -> c) -> (a -> c)
 */
export default (...fns) => arg =>
  fns.reduceRight(
    (acc, fn) => fn(acc),
    arg
  );
