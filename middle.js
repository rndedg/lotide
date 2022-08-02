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


module.exports = middle;