

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎️👎️👎️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    let obj1Keys = Object.keys(obj1);

    for (const element of obj1Keys) {
      if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        if (!eqArrays(obj1[element], obj2[element])) {
          return false;
        }
      }
    }
    return true;
  }
};




// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍️👍️👍️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎️👎️👎️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

