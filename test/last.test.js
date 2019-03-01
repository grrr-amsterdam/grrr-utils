import last from '../functions/last';

describe('last', () => {
  test('Should grab the last of an array', () => {
    expect(last(['foo', 'bar', 'baz'])).toEqual('baz');
    expect(last([])).toBeUndefined();
  });
  test('Should grab the last character of a string', () => {
    expect(last('Boo')).toEqual('o');
    expect(last('')).toBeUndefined();
  });
});
