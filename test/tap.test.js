import tap from '../functions/tap';

describe('tap', () => {
  test('Executes a side-effect', () => {
    const record = [];
    const log = n => record.push(n);
    const tapLog = tap(log);

    expect(tapLog(42)).toEqual(42);
    expect(record).toEqual([42]);

    expect(tapLog(120)).toEqual(120);
    expect(record).toEqual([42, 120]);
  });
});
