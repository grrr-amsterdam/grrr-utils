import defined from '../functions/defined';

describe('defined', () => {
  test('Should check if defined', () => {
    const bar = 'baz';
    expect(defined(bar)).toBeTruthy();
    expect(defined([])).toBeTruthy();
    expect(defined('')).toBeTruthy();

    let foo;
    expect(foo).toBeUndefined();
    expect(defined(foo)).toBeFalsy();
    expect(defined(window.bar)).toBeFalsy();
    expect(defined(undefined)).toBeFalsy();
  });
});
