const capitalize = (string) => {
  // const capitalized = string.slice(0, 1).toUpperCase() + string.slice(1);
  const capitalized = string[0].toUpperCase() + string.slice(1);

  return capitalized;
  // console.log(string);
};

export default capitalize;
