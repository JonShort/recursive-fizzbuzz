const theArray = new Array(100);

for(let i = 0; i < theArray.length; ++i) {
  theArray[i] = i + 1;
}

const recursiveCheck = (array) => (n = 0) => {
  const currentVal = n + 1;

  if (!(currentVal % 3) && !(currentVal % 5)) {
    array[n] = 'FizzBuzz';
  } else {
    if (!(currentVal % 3)) {
      array[n] = 'Fizz';
    }

    if (!(currentVal % 5)) {
      array[n] = 'Buzz';
    }
  }

  n !== array.length && recursiveCheck(array)(n + 1);
};

recursiveCheck(theArray)();

console.log(theArray);
