const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", () => {
  describe("#toString", () => {
    it("should give string representation of Point class instance", () => {
      const point = new Point(2, 3);
      const expected = "[Point @(2,3)]";
      assert.strictEqual(point.toString(), expected);
    });
  });
});
