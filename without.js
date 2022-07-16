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


//Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
} 
