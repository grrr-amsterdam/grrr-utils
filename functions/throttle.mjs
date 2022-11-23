/* eslint-disable func-names */
import curry from './curry.mjs';
import memoize from './memoize.mjs';

/**
 * Creates a throttled function that invokes {fn} only every
 * {threshold} milliseconds.
 * Returns a promise that resolves to the value returned by {fn}.
 */
const throttle = curry(
  (fn, threshold) => {
    const getState = memoize(() => ({
      last: undefined,
      timer: undefined,
    }));
    return function (...args) {
      const context = this;
      const now = +new Date();
      const state = getState(...args);
      return new Promise((resolve) => {
        const invokeFn = () => {
          state.last = now;
          return resolve(fn.apply(context, args));
        };
        if (state.last && now < state.last + threshold) {
          clearTimeout(state.timer);
          state.timer = setTimeout(invokeFn, threshold);
          return;
        }
        invokeFn();
      });
    };
  }
);

export default throttle;
