// Write a curried function that takes an array of numbers and returns a new function that takes a number and returns the sum of the array and the number.

const sumOfArrayAndNumber = arr => {
  return num => {
    return arr.reduce((prev, next) => prev + next) + num;
  };
};

const sumOfArrayAndNumber2 = arr => num => arr.reduce((prev, next) => prev + next) + num;

const oneThroughTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sumOfOneThroughTwelveAndNumber = sumOfArrayAndNumber(oneThroughTwelve);
const sumOfOneThroughTwelveAndNumber2 = sumOfArrayAndNumber2(oneThroughTwelve);

// Write a curried function that takes a number and returns a new function that takes a number and subtracts the first number from the second number.

const subtractFromNumber = firstNumber => {
  return secondNumber => {
    return secondNumber - firstNumber;
  }
}

const subtractFromNumber2 = firstNumber => secondNumber => secondNumber - firstNumber;

let subtractFive = subtractFromNumber2(5);

subtractFive(12);

