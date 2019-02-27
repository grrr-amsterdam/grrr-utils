import compose from '../functions/compose';

describe('compose', () => {
  test('Should compose functions', () => {
    const join = xs => xs.join(' ');
    const split = xs => xs.split(' ');
    const heads = xs => xs.map(x => x[0]);
    const initials = compose(join, heads, split);

    expect(initials('Miles Davis')).toEqual('M D');
    expect(initials('John Coltrane')).toEqual('J C');
  });

  test('Should allow a single or no functions', () => {
    const toUpper = compose(x => x.toUpperCase());
    expect(toUpper('foo')).toEqual('FOO');

    const noop = compose();
    expect(noop('Foo')).toEqual('Foo');
  });
});
