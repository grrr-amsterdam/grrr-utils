import reverse from '../functions/reverse';

describe('reverse', () => {
  test('Should reverse an array', () => {
    expect(reverse(['foo', 'bar', 'baz'])).toEqual(['baz', 'bar', 'foo']);
    expect(reverse([])).toEqual([]);
  });
  test('Should reverse a string', () => {
    expect(reverse('foo bar')).toEqual(['r', 'a', 'b', ' ', 'o', 'o', 'f']);
    expect(reverse('')).toEqual([]);
  });
});
