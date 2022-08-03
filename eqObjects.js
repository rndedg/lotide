const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;