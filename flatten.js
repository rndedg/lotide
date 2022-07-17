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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("True! These arrays are equal.");
  } else {
    console.log("False. These arrays are not equal.");
  }
};

//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(source) {
  let flattened = [];

  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      for (const element of source[i]) {
        flattened.push(element);
      }
    } else {
      flattened.push(source[i]);
    }
  } 
  console.log(flattened);
};
