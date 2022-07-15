const arrayAnalize = (array) => {
  const result = {};
  result.average =
    array.reduce((sum, current) => sum + current, 0) / array.length;
  result.min = Math.min(...array);
  result.max = Math.max(...array);
  result.length = array.length;

  return result;
};

export default arrayAnalize;
