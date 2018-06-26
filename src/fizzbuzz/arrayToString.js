const arrayToString = array => {
  let arrayString = array[0];

  for (let i = 1; i < array.length; i += 1) {
    arrayString = arrayString + `, ${array[i].toString()}`;
  }

  return arrayString;
};

module.exports = arrayToString;
