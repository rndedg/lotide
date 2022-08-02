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
  return flattened;
};


module.exports = flatten;