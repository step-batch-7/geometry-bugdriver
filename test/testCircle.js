const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("#Circle", () => {
  describe("#toString", () => {
    it("should give representation of Circle Object", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
});
