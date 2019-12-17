const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", () => {
  describe("#toString", () => {
    it("should give String representation of instance of Rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const expected = "[Rectangle (1,1) to (5,4)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
});
