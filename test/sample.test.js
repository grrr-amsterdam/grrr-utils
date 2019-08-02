import sample from '../functions/sample';

describe('sample', () => {
  test('Should grab a random item of an array', () => {
    expect(['foo', 'bar', 'baz']).toContain(sample(['foo', 'bar', 'baz']));
    expect([{ id: 1 }, { id: 2 }]).toContainEqual(sample([{ id: 1 }, { id: 2 }]));
    expect(sample([])).toBeUndefined();
  });
  test('Should grab a random character of a string', () => {
    const string = 'Foo Bar';
    expect(string).toContain(sample(string));
    expect(sample('Boo')).toHaveLength(1);
    expect(sample('')).toBeUndefined();
  });
});
