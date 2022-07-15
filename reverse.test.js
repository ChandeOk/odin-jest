import reverseString from './reverse';

test('reverse 1', () => {
  expect(reverseString('rajiv')).toBe('vijar');
});

test('reverse 2', () => {
  expect(reverseString('Here we go')).toBe('og ew ereH');
});

test('reverse 2', () => {
  expect(reverseString('Here we go')).not.toBe('og ew  ereH');
});
