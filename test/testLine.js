const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("toString", () => {
    it("should give representation of line Object", () => {
      const line = new Line(2, 5, 6, 5);
      const expected = "Line{startPoint(2,5),endPoint(6,5)}";
      assert.strictEqual(line.toString(), expected);
    });
  });

  describe("isEqualTo", () => {
    it("should check if given object is same", () => {
      const line1 = new Line(1, 2, 2, 1);
      const line2 = new Line(1, 2, 2, 1);
      const actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, true);
    });
    it("should check if given object is not same", () => {
      const line1 = new Line(1, 2, 2, 1);
      const line2 = new Line(1, 2, 2, 3);
      const actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, false);
    });
  });
});
