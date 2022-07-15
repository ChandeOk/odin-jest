import calculator from './calculator';

test('add', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('add 2 ', () => {
  expect(calculator.add(1000, 25)).toBe(1025);
});

test('multiply', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('multiply 2', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});

test('substract', () => {
  expect(calculator.substract(10, 5)).toBe(5);
});

test('substract 2', () => {
  expect(calculator.substract(100, 22)).toBe(78);
});

test('divide', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('divide', () => {
  expect(calculator.divide(80, 8)).toBe(10);
});
