const assert = require('chai').assert;
const countOnly   = require('../countOnly');


const firstNames = [
  "Gord",
  "David",
  "Heather",
  "Mike",
  "Karen",
  "Shane",
  "David",
  "Mike",
  "Marie"
];

describe("#countOnly", () => {
  it("should return { 'Shane': 1, 'Mike': 2 }", () => {
    assert.deepEqual(countOnly(firstNames, { "Shane": true, "Karima": true, "Mike": true }), { "Shane": 1, "Mike": 2});
  });
  it("should return { 'Gord': 1 }", () => {
    assert.deepEqual(countOnly(firstNames, { "Gord": true, "Theo": true, "Marie": false }), { "Gord" : 1 });
  });
});