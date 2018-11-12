import prop from '../src/prop';

describe('prop', () => {
  test('Gets a property from an object', () => {
    const person = {
      name: 'Joe',
      age: 42,
    };

    expect(prop('name', person)).toEqual('Joe');
    expect(prop('age', person)).toEqual(42);
    expect(prop('dob', person)).toBeUndefined();

    const s = Symbol('my key');
    Object.defineProperty(person, s, {
      value: 'foo',
    });

    expect(prop(s)(person)).toEqual('foo');
  });
});
