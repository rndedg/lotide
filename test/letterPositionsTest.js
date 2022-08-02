const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("should return [2] for g in 'lighthouse'", () => {
    assert.deepEqual(letterPositions("lighthouse").g, [2]);
  });
  it("should return [0, 11] for l in 'lighthouse labs'", () => {
    assert.deepEqual(letterPositions("lighthouse labs").l, [0, 11]);
  });
});