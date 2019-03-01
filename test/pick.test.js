import pick from '../functions/pick';

describe('pick', () => {
  test('Gets an object with picked properties', () => {
    const person = {
      name: 'Joe',
      age: 42,
      country: 'NL',
    };

    expect(pick(['name', 'age'], person)).toEqual({ name: 'Joe', age: 42 });
    expect(pick(['age'], person)).toEqual({ age: 42 });
    expect(pick(['planet'], person)).toEqual({});

    const s = Symbol('my key');
    Object.defineProperty(person, s, {
      value: 'foo',
    });

    expect(pick([s])(person)).toEqual({ [s]: 'foo' });
  });
});
