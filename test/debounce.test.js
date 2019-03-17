import debounce from '../functions/debounce';

describe('debounce', () => {
  let fn;
  let debouncedFn;

  beforeEach(() => {
    fn = jest.fn((x) => x * 2);
    debouncedFn = debounce(fn, 1000);
  });

  jest.useFakeTimers();

  test('Should debounce function calls', () => {
    expect.assertions(4);

    const promises = [
      debouncedFn(21).then(x => expect(x).toEqual(42)),
      debouncedFn(200).then(x => expect(x).toEqual(400)),
    ];

    expect(fn).toHaveBeenCalledTimes(0);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(2);
    return Promise.all(promises);
  });

  test('Should only call it once', () => {
    const promises = [];
    for (let i = 0; i < 100; i += 1) {
      promises.push(debouncedFn());
      jest.advanceTimersByTime(1);
    }
    expect(fn).toHaveBeenCalledTimes(0);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
    return Promise.all(promises);
  });

  test('Should call function with given arguments', () => {
    debouncedFn('foo');
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
