const toCaesar = (string, key = 1) => {
  const regexSymbol = /\W/g;
  const array = string.split('');
  const result = array.map((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122)
      return String.fromCharCode(Math.ceil(((charCode + key - 97) % 26) + 97));
    if (charCode >= 65 && charCode <= 90)
      return String.fromCharCode(Math.ceil(((charCode + key - 65) % 26) + 65));
    if (char.match(regexSymbol)) return char;
  });

  return result.join('');
};

export default toCaesar;
