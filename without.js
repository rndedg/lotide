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

module.exports = without;