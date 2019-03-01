import omit from '../functions/omit';

describe('omit', () => {
  test('Gets an object with omitted properties', () => {
    const person = {
      name: 'Joe',
      age: 42,
      country: 'NL',
    };

    expect(omit(['name'], person)).toEqual({ age: 42, country: 'NL' });
    expect(omit(['age', 'country'], person)).toEqual({ name: 'Joe' });
    expect(omit(['planet'], person)).toEqual(person);

    const s = Symbol('my key');
    Object.defineProperty(person, s, {
      value: 'foo',
    });

    expect(omit([s])(person)).toEqual(person);
  });
});
