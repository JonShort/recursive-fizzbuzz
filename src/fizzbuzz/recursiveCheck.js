const arrayToString = require('./arrayToString');

const recursiveCheck = array => (n = 0) => {
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

  if (n < array.length) {
    recursiveCheck(array)(n + 1);
  } else {
    console.log(`${arrayToString(array)}\r\n`);
  }
};

module.exports = recursiveCheck;
