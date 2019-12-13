const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("toString", () => {
    it("should give representation of line Object", () => {
      const line = new Line({ x: 2, y: 5 }, { x: 6, y: 5 });
      const expected = "Line{(2,5),(6,5)}";
      assert.strictEqual(line.toString(), expected);
    });
  });

  describe("isEqualTo", () => {
    it("should check if given object is same", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, true);
    });
    it("should check if given object is not same", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, false);
    });
    it("should check if given object is not instance of Line", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const line2 = { start: { x: 1, y: 2 }, end: { x: 2, y: 3 } };
      const actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, false);
    });
    it("should check if own object is passed", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const actual = line1.isEqualTo(line1);
      assert.strictEqual(actual, true);
    });
  });
});
