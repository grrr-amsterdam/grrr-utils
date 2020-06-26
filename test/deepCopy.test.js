import deepCopy from '../functions/deepCopy';

describe('deepCopy', () => {
  test('Will make a deep copy, replacing nested objects with copies', () => {
    const original = {
      foo: 'foo',
      config: {
        enabled: true,
        detail: {
          something: 'something',
          pi: 3.4
        }
      }
    };

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy.config).not.toBe(original.config);

    // Ensure changes have not propagated back to the original.
    copy.config.enabled = false;

    expect(original.config.enabled).toBe(true);
  });
});
