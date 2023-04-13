// Write a function that takes a number n and returns the nth Fibonacci number using recursion.

const getNthFibonacci = n => {
  if (n === 0 || n === 1) {
    return n;
  }
  return getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
}

// Write a function that takes a string and recursively reverses it.

const reverseString = string => {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

// Write a function that takes an array and recursively flattens it.

const flatten = arr => {
  if (arr.filter(item => Array.isArray(item)).length === 0) {
    return arr;
  } else {
    return flatten(arr.flat());
  }
}
