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

  describe("#isEqualTo", () => {
    it("should check if given object is same", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.ok(circle1.isEqualTo(circle2));
    });
    it("should check if given object is not same", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 4);
      assert.notOk(circle1.isEqualTo(circle2));
    });
    it("should check if given object is not instance of Circle", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const c = { center: { x: 1, y: 2 }, radius: 5 };
      assert.notOk(circle.isEqualTo(c));
    });
    it("should check if same instance is passed", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.ok(circle.isEqualTo(circle));
    });
  });

  describe("#area", () => {
    it("should give area of given circle when center cordinates are positive", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.area, 78.5, 0.05);
    });
  });

  describe("#perimeter", () => {
    it("should give area of given circle when center cordinates are positive", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.perimeter, 31.42, 0.05);
    });
  });
});
