/* eslint-disable func-names */
import curry from './curry.mjs';

/**
 * Creates a debounced function that delays invoking {fn} until after {delay}
 * milliseconds have elapsed since the last time the debounced function was invoked.
 * Returns a promise that resolves to the value returned by {fn}.
 */
const debounce = curry(
  (fn, delay) => {
    let timer;
    return function (...args) {
      return new Promise((resolve) => {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => resolve(fn.apply(context, args)), delay);
      });
    };
  }
);

export default debounce;
