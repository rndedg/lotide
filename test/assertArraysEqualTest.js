
const eqArrays = require('../eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("True! These arrays are equal.");
  } else {
    console.log("False. These arrays are not equal.");
  }
};

assertArraysEqual([1, 2, 3, 4],[1, 2, 3, 4]);
assertArraysEqual(['banana', 'apple', 'potato'], ['banana', 'apple', 'grapes']);