const countLetters = function (string) {
  let results = {};
  
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    } else {
      results[letter] = (results[letter] || 0) + 1;
    }
  } return results;
};

module.exports = countLetters;