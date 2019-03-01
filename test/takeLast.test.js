import takeLast from '../functions/takeLast';

describe('takeLast', () => {
  test('Should get the first n items of an array', () => {
    expect(takeLast(2, ['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);
    expect(takeLast(2, [])).toEqual([]);
    expect(takeLast(8, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
    expect(takeLast(2)(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);
  });
  test('Should get the first n items of a string', () => {
    expect(takeLast(4, 'foo bar')).toEqual([' ', 'b', 'a', 'r']);
    expect(takeLast(4, '')).toEqual([]);
  });
});
