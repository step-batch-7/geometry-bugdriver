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

  describe("#visit", () => {
    it("should give add when addition function passed", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
    it("should give multiply when multiply function passed", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
  });
});
