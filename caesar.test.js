import toCaesar from './caesar';

test('to Caesar with key 1', () => {
  expect(toCaesar('ABCDEFG', 1)).toBe('BCDEFGH');
});

test('to Caesar with key 1', () => {
  expect(toCaesar('ABCDEFG')).toBe('BCDEFGH');
});

test('to Caesar with key 2', () => {
  expect(toCaesar('AbCdEfG', 2)).toBe('CdEfGhI');
});

test('to Caesar with key 1', () => {
  expect(toCaesar('Zz', 1)).toBe('Aa');
});

test('to Caesar with key 1', () => {
  expect(toCaesar('abc, def? GH', 1)).toBe('bcd, efg? HI');
});
