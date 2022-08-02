const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3] when passed ([1, 2],[3])", () => {
    assert.deepEqual(flatten([1, 2, [3]]), [1, 2, 3]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7] for [[1, 2, 3], 4, 5, 6, [7]]", () => {
    assert.deepEqual(flatten([[1, 2, 3], 4, 5, 6, [7]]), [1, 2, 3, 4, 5, 6, 7]); 
  });
});