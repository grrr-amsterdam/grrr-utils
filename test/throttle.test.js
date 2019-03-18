import throttle from '../functions/throttle';

const THRESHOLD = 1000;

describe('throttle', () => {
  let fn;
  let throttledFn;

  beforeEach(() => {
    fn = jest.fn((x) => x * 2);
    throttledFn = throttle(fn, THRESHOLD);
  });

  jest.useFakeTimers();

  test('Should invoke function immediately', () => {
    expect.assertions(3);
    const promises = [
      throttledFn(21).then(x => expect(x).toEqual(42)),
      throttledFn(200).then(x => expect(x).toEqual(400)),
    ];
    expect(fn).toHaveBeenCalledTimes(2);
    return Promise.all(promises);
  });

  test('Should throttle function calls', () => {
    expect.assertions(21);
    const promises = [];
    for (let i = 0; i < 10; i += 1) {
      promises.push(throttledFn(21).then(x => expect(x).toEqual(42)));
      promises.push(throttledFn(200).then(x => expect(x).toEqual(400)));
      jest.advanceTimersByTime(THRESHOLD);
    }
    expect(fn).toHaveBeenCalledTimes(20);
    return Promise.all(promises);
  });

  test('Should call function with given arguments', () => {
    throttledFn('foo');
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
