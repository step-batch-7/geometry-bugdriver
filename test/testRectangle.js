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

  describe("#isEqualTo", () => {
    it("should check if given object is same", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
    it("should check if given object is not same", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 4 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should check if given object is not instance of Rectangle", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const r = { pointa: { x: 1, y: 1 }, pointc: { x: 5, y: 4 } };
      assert.notOk(rectangle1.isEqualTo(r));
    });
    it("should check if same instance is passed", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.ok(rectangle.isEqualTo(rectangle));
    });
  });

  describe("#perimeter", () => {
    it("should give perimeter of rectangle if diagonal is not parallel to x of y axis", () => {
      const rectangle = new Rectangle({ x: 8, y: 10 }, { x: 22, y: 5 });
      assert.strictEqual(rectangle.perimeter, 38);
    });
    it("should give perimeter of rectangle if diagonal is parallel to x of y axis", () => {
      const rectangle = new Rectangle({ x: 8, y: 5 }, { x: 22, y: 5 });
      assert.strictEqual(rectangle.perimeter, 28);
    });
  });
  describe("#area", () => {
    it("should give area of rectangle if diagonal is not parallel to x of y axis", () => {
      const rectangle = new Rectangle({ x: 8, y: 10 }, { x: 22, y: 5 });
      assert.strictEqual(rectangle.area, 70);
    });
    it("should give area of rectangle if diagonal is parallel to x of y axis", () => {
      const rectangle = new Rectangle({ x: 8, y: 5 }, { x: 22, y: 5 });
      assert.strictEqual(rectangle.area, 0);
    });
  });
});
