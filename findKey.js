const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
      break;
    } 
  } return undefined;
};

module.exports = findKey;