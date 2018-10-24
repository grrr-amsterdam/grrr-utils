import tail from '../src/tail';

describe('Tail', () => {
  test('Should get the tail of an array', () => {
    expect(tail(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);
    expect(tail([])).toEqual([]);
  });

  test('Should get the tail of a string', () => {
    expect(tail('foo bar')).toEqual(['o', 'o', ' ', 'b', 'a', 'r']);
    expect(tail('')).toEqual([]);
  });
});
