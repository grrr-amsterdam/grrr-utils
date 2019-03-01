import take from '../functions/take';

describe('take', () => {
  test('Should get the first n items of an array', () => {
    expect(take(2, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar']);
    expect(take(8, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(take(2, [])).toEqual([]);
    expect(take(2)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar']);
  });
  test('Should get the first n items of a string', () => {
    expect(take(4, 'foo bar')).toEqual(['f', 'o', 'o', ' ']);
    expect(take(4, '')).toEqual([]);
  });
});
