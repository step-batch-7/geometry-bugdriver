const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("toString", () => {
    it("should give representation of line Object", () => {
      console.log(Line);
      const line = new Line(2, 5, 6, 5);
      const expected = "Line{startPoint(2,5),endPoint(6,5)}";
      assert.strictEqual(line.toString(), expected);
    });
  });
});
