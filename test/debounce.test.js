import debounce from '../functions/debounce';

describe('debounce', () => {
  let fn;
  let debouncedFn;

  beforeEach(() => {
    fn = jest.fn(() => 42);
    debouncedFn = debounce(fn, 1000);
  });

  jest.useFakeTimers();

  test('Should debounce function calls', () => {
    expect.assertions(3);

    const promise = debouncedFn().then(x => expect(x).toEqual(42));

    expect(fn).toHaveBeenCalledTimes(0);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
    return promise;
  });

  test('Should only call it once', () => {
    for (let i = 0; i < 100; i += 1) {
      debouncedFn();
      jest.advanceTimersByTime(1);
    }
    expect(fn).toHaveBeenCalledTimes(0);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Should call function with given arguments', () => {
    debouncedFn('foo');
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
