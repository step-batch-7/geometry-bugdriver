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
    it("should give add when addition of coordinates function passed", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
    it("should give multiplication of coordinates when multiply function passed", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
  });

  describe("#clone", () => {
    it("should give instance of Point with same value of fields", () => {
      const point = new Point(2, 3);
      const actual = point.clone();
      assert.ok(actual instanceof Point);
      assert.deepStrictEqual(point, actual);
    });
  });
});
