import debounce from '../functions/debounce';

const THRESHOLD = 1000;

describe('debounce', () => {
  let fn;
  let debouncedFn;

  beforeEach(() => {
    fn = jest.fn((x) => x * 2);
    debouncedFn = debounce(fn, THRESHOLD);
  });

  jest.useFakeTimers();

  test('Should debounce function calls', () => {
    expect.assertions(6);

    const promises = [
      debouncedFn(21).then(x => expect(x).toEqual(42)),
    ];

    expect(fn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(THRESHOLD);
    expect(fn).toHaveBeenCalledTimes(1);

    promises.push(debouncedFn(3).then(x => expect(x).toEqual(6)));

    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(THRESHOLD);
    expect(fn).toHaveBeenCalledTimes(2);

    return Promise.all(promises);
  });

  test('Should only call it once', () => {
    let promise;
    for (let i = 0; i < THRESHOLD; i += 1) {
      promise = debouncedFn();
      jest.advanceTimersByTime(1);
    }

    expect(fn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(THRESHOLD);
    expect(fn).toHaveBeenCalledTimes(1);

    return promise;
  });

  test('Should call function with given arguments', () => {
    debouncedFn('foo');
    jest.advanceTimersByTime(THRESHOLD);
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
