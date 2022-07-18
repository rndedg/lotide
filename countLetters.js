const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍️👍️👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎️👎️👎️ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function (string) {
  let results = {};
  
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    } else {
      results[letter] = (results[letter] || 0) + 1;
    }
  } console.log(results);
};