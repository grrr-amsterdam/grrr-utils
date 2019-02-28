import memoize from '../functions/memoize';

describe('memoize', () => {
  test('Memoizes functions', () => {
    const add = jest.fn((x, y) => x + y);
    const memoizedAdd = memoize(add);

    memoize(add(1, 2));
    memoize(add(1, 2));
    expect(add).toHaveBeenCalledTimes(2);

    memoizedAdd(1, 2);
    memoizedAdd(1, 2);
    expect(add).toHaveBeenCalledTimes(3);

    expect(add(1, 2)).toEqual(3);
    expect(memoizedAdd(1, 2)).toEqual(3);

    const fn = jest.fn(({ a, b }) => a === b);
    const memoizedFn = memoize(fn);

    memoizedFn({ a: true, b: true });
    memoizedFn({ a: true, b: true });
    expect(fn).toHaveLastReturnedWith(true);
    expect(fn).toHaveBeenCalledTimes(1);

    memoizedFn({ a: true, b: false });
    memoizedFn({ a: true, b: false });
    expect(fn).toHaveLastReturnedWith(false);
    expect(fn).toHaveBeenCalledTimes(2);

    memoizedFn({ a: false, b: false });
    memoizedFn({ a: false, b: false });
    expect(fn).toHaveLastReturnedWith(true);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
