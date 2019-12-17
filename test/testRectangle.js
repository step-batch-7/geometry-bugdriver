const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

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

  describe("#hasPoint", () => {
    it("should check if point lies on AB side", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(16, 13);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should check if point lies on BC side", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(33, 7);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should check if point lies on CD side", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(15, 5);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should check if point lies on DA side", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(8, 8);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should check if point lies inside rectangle", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(25, 10);
      assert.notOk(rectangle.hasPoint(point));
    });
    it("should check if point lies outside rectangle", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(40, 5);
      assert.notOk(rectangle.hasPoint(point));
    });
    it("should check if point instance is not passed", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      assert.notOk(rectangle.hasPoint({ x: 25, y: 10 }));
    });
  });

  describe("#covers", () => {
    it("should check if given point is inside rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 11 }, { x: 33, y: 5 });
      const point = new Point(20, 10);
      assert.ok(rectangle.covers(point));
    });
    it("should check if given point is inside rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(3, 3);
      assert.ok(rectangle.covers(point));
    });
    it("should check if given point is on the rectangle", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(32, 7);
      assert.ok(rectangle.covers(point));
    });
    it("should check if given point is outside rectangle", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = new Point(5, 5);
      assert.notOk(rectangle.covers(point));
    });
    it("should check if given object is not instance of Point", () => {
      const rectangle = new Rectangle({ x: 8, y: 13 }, { x: 33, y: 5 });
      const point = { x: 5, y: 5 };
      assert.notOk(rectangle.covers(point));
    });
  });
});
