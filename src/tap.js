/**
 * For doing side-effects.
 * The generated function returns whatever argument it receives, and executes the side-effect
 * function in the middle. Handy for chaining logs. For instance:
 *
 * myPromise().then(tap(x => console.log(x))).then(x => ...);
 *
 * tap :: (a -> b) -> (a -> a)
 */
export default f =>
  x => {
    f(x);
    return x;
  };
