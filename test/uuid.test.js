import uuid from '../functions/uuid';

// See https://stackoverflow.com/a/52612372
const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
});

describe('uuid', () => {
  test('Should create a unique identifier', () => {
    expect(uuid().length).toEqual(36);
    for (let i = 0; i < 1000; i += 1) {
      expect(uuid()).not.toEqual(uuid());
    }
  });
});
