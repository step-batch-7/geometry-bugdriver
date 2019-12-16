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

  describe("#isEqualTo", () => {
    it("should determine if given object is equal", () => {
      const point = new Point(2, 3);
      const point1 = new Point(2, 3);
      assert.ok(point.isEqualTo(point, point1));
    });
    it("should determine if given object is not equal", () => {
      const point = new Point(2, 3);
      const point1 = new Point(2, 4);
      assert.notOk(point.isEqualTo(point1));
    });
    it("should determine if itself is passed", () => {
      const point = new Point(2, 3);
      assert.ok(point.isEqualTo(point));
    });
    it("should determine Point instance is not passed", () => {
      const point = new Point(2, 3);
      const other = { x: 2, y: 3 };
      assert.notOk(point.isEqualTo(other));
    });
  });

  describe("#findDistanceTo", () => {
    it("should give distance between two points having positive coordinates", () => {
      const point1 = new Point(6, 1);
      const point2 = new Point(13, 1);
      assert.equal(point1.findDistanceTo(point2), 7);
    });
    it("should give distance between two points having negetive coordinates", () => {
      const point1 = new Point(-4, -1);
      const point2 = new Point(-5, -1);
      assert.equal(point1.findDistanceTo(point2), 1);
    });
    it("should give NaN if Point instance is not passed", () => {
      const point = new Point(6, 1);
      const p = { x: 13, y: 1 };
      assert.isNaN(point.findDistanceTo(p));
    });
    it("should give 0 if same instance is passed", () => {
      const point = new Point(6, 1);
      assert.equal(point.findDistanceTo(point), 0);
    });
  });
});
