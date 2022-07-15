const reverseString = (string) => {
  const array = string.split('').reverse();
  const result = array.join('');
  return result;
};

export default reverseString;
