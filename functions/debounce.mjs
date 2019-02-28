/* eslint-disable func-names */
import curry from './curry';

/**
 * debounce :: (a -> b) -> Number -> (a -> Promise b)
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
