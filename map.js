const words = ["ground", "control", "to", "major", "tom"];
const food = ["burger", "taco", "pizza", "salad"];
const animals = ["tiger", "cat", "eagle", "dog", "elephant"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(food, word => word[0]);
console.log(results2);

const results3 = map(animals, word => word[0]);
console.log(results3);



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



const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("True! These arrays are equal.");
  } else {
    console.log("False. These arrays are not equal.");
  }
};


console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'b', 't', 'p', 's' ]));
console.log(assertArraysEqual(results3, [ 't', 'c', 'e', 'd', 'e' ]));
