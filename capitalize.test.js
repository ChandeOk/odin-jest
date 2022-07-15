import capitalize from './capitalize';

test('capitalize 1st letter', () => {
  expect(capitalize('string wtf lololol')).toBe('String wtf lololol');
});

test('capitalize 1st letter 2', () => {
  expect(capitalize('Here we go again')).toBe('Here we go again');
});

test('capitalize 1st letter 3', () => {
  expect(capitalize('lol wtf is going on')).toBe('Lol wtf is going on');
});
