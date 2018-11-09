import head from '../functions/head';

describe('Head', () => {
  test('Should grab the first of an array', () => {
    expect(head(['foo', 'bar', 'baz'])).toEqual('foo');
    expect(head([])).toBeUndefined();
  });

  test('Should grab the first character of a string', () => {
    expect(head('Boo')).toEqual('B');
    expect(head('')).toBeUndefined();
  });
});
