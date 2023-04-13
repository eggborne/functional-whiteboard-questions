// Write a function that takes two functions and returns a new function that applies the first function to the result of the second function.

const double = num => num * 2;
const addTwo = num => num + 2;
const addFive = num => num + 5;
const addTwelve = num => num + 12;

const multiFunction = (num) => {
  return (firstFunc) => {
    const obj = {
      applyFirstToSecond: (secondFunc) => {
        return firstFunc(secondFunc(num));
      }
    }
    return obj;
  }
}

const multiFunction2 = num => firstFunc => {return { applyFirstToSecond: secondFunc => firstFunc(secondFunc(num)) } };

const doubleThenAddFive = multiFunction(5)(addFive);
const doubleThenAddFive2 = multiFunction2(5)(addFive);

doubleThenAddFive.applyFirstToSecond(double);
doubleThenAddFive2.applyFirstToSecond(double);

// only currying??

const applyFirstToSecond = first => {
  return second => {
    return num => {
      return first(second(num));
    }
  }
}

const applyFirstToSecond2 = first => second => num => first(second(num));

applyFirstToSecond(double)(addFive)(5);
applyFirstToSecond2(double)(addFive)(5);


// Write a function that takes an array of functions and returns a new function that applies each function in the array to the result of the previous function.

const functionSequence = funcArr => {
  const obj = {};
  for (let i = 0; i < funcArr.length; i++) {
    console.log('eval?', eval(funcArr[i]).toString());
    if (i > 0) {
      obj[`function${i}`] = num => funcArr[i](funcArr[i-1](num));
    } else {
      obj[`function${i}`] = num => funcArr[i](num);
    }
  }
  return obj;
}

let seq = functionSequence([addTwo, addFive, addTwelve, double]);

seq.function0(2);
seq.function1(2);
seq.function2(2);
seq.function3(2);
