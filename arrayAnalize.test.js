import arrayAnalize from './arrayAnalize';

test('analize1', () => {
  expect(arrayAnalize([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('analize2', () => {
  expect(arrayAnalize([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('analize3', () => {
  expect(arrayAnalize([10, 10, 5, 5, 0, 0])).toEqual({
    average: 5,
    min: 0,
    max: 10,
    length: 6,
  });
});
