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


//Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(source) {
  if (source.length <= 2) {
    return [];
  } else if (source.length % 2 === 0) {
    return source.slice(source.length / 2 -1, source.length / 2 +1)
  } else {
    let middleNums = [];
    let mid = Math.round(source.length / 2)
    middleNums.push(source[mid -1]);
    return(middleNums);
  }
};
