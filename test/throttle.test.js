import throttle from '../functions/throttle';

const THRESHOLD = 1000;

describe('throttle', () => {
  let fn;
  let throttledFn;

  beforeEach(() => {
    fn = jest.fn();
    throttledFn = throttle(fn, THRESHOLD);
  });

  jest.useFakeTimers();

  test('Should invoke function immediately', () => {
    throttledFn();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Should throttle function calls', () => {
    for (let i = 0; i < THRESHOLD * 10; i += THRESHOLD) {
      throttledFn();
      jest.advanceTimersByTime(THRESHOLD);
    }
    expect(fn).toHaveBeenCalledTimes(10);
  });

  test('Should call function with given arguments', () => {
    throttledFn('foo');
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
