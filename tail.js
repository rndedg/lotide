const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍️👍️👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎️👎️👎️ Assertion Failed: ${actual} !== ${expected}`);
  }

};

//This will return the elements of an array AFTER the first element.
const tail = function(arr) {

  let newArr = [];
  
  if (arr.length <= 1) {
    return newArr;
  } else {
    newArr = arr.slice(1);
  } return newArr;
  
};
