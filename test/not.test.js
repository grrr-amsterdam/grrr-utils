import not from '../src/not';

describe('not', () => {
  test('Reverses outcome of given function', () => {
    const notAnArray = not(Array.isArray);

    expect(notAnArray(42)).toEqual(true);
    expect(notAnArray(false)).toEqual(true);
    expect(notAnArray([])).toEqual(false);
  });
});
