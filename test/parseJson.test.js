/* eslint-disable no-console */

import parseJson from '../functions/parseJson';

describe('parseJson', () => {
  test('Should parse JSON and not fail when invalid JSON is encountered', () => {
    const json = {
      "foo": 1,
      "bar": "baz",
    };

    expect(parseJson(JSON.stringify(json))).toEqual(json);
    expect(parseJson(JSON.stringify(json)).foo).toEqual(1);

    console.warn = jest.fn();
    expect(parseJson(json)).toBeUndefined();
    expect(parseJson('foo')).toBeUndefined();
    expect(console.warn).toHaveBeenCalledTimes(2);
  });
});
