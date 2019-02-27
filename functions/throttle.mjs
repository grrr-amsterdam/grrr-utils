/* eslint-disable func-names */
import curry from './curry';

/**
 * throttle :: (a -> b) -> Number -> (a -> b)
 */
const throttle = curry((fn, threshold) => {
  let timer;
  let last;
  return function (...args) {
    const context = this;
    const now = +new Date();
    if (last && now < last + threshold) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
        last = now;
      }, threshold);
    } else {
      fn.apply(context, args);
      last = now;
    }
  };
});

export default throttle;
