/* eslint-disable func-names */
import curry from './curry';

/**
 * debounce :: (a -> b) -> Number -> (a -> b)
 */
const debounce = curry((fn, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
});

export default debounce;
