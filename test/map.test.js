import map from '../functions/map';

const double = n => n * 2;

describe('map', () => {
  test('Will execute map on an array', () => {
    expect(map(double)([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    expect(map(double)([100, 0, 200])).toEqual([200, 0, 400]);
  });
  test('Accepts any functor', () => {
    const Maybe = value => ({
      map(f) {
        return Maybe(value ? f(value) : value);
      },
      value,
    });

    const maybe42 = Maybe(42);
    const maybeUndefined = Maybe(undefined);

    expect(map(double)(maybe42).value).toEqual(84);
    expect(map(double)(maybeUndefined).value).toBeUndefined();
  });
});
