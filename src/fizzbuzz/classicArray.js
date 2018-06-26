const classicArray = () => {
  const theArray = new Array(100);

  for (let i = 0; i < theArray.length; ++i) {
    theArray[i] = i + 1;
  }

  return theArray;
};

module.exports = classicArray;
