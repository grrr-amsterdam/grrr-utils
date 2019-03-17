/* eslint-disable func-names */
import curry from './curry';
import memoize from './memoize';

const setTimer = memoize(() => {
  let timer;
  return (fn, delay) => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
});

/**
 * Creates a debounced function that delays invoking {fn} until after {delay}
 * milliseconds have elapsed since the last time the debounced function was invoked.
 * Returns a promise that resolves to the value returned by {fn}.
 */
const debounce = curry(
  (fn, delay) => {
    return memoize(function (...args) {
      const context = this;
      return new Promise((resolve) => {
        setTimer(...args)(() => resolve(fn.apply(context, args)), delay);
      });
    });
  }
);

export default debounce;
