const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍️👍️👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎️👎️👎️ Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

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

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("True! These arrays are equal.");
  } else {
    console.log("False. These arrays are not equal.");
  }
};
