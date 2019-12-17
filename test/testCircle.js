const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", () => {
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

  describe("#hasPoint", () => {
    it("should check if point passed is on circle", () => {
      const circle = new Circle({ x: 6, y: 1 }, 7);
      const point = new Point(13, 1);
      assert.ok(circle.hasPoint(point));
    });
    it("should check if point passed is not on circle", () => {
      const circle = new Circle({ x: 6, y: 2 }, 7);
      const point = new Point(13, 1);
      assert.notOk(circle.hasPoint(point));
    });
    it("should check if point instance passed", () => {
      const circle = new Circle({ x: 6, y: 1 }, 7);
      const point = { x: 13, y: 1 };
      assert.notOk(circle.hasPoint(point));
    });
  });

  describe("#moveTo", () => {
    it("should move center of circle to given center", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = new Circle({ x: 2, y: 2 }, 5);
      const actual = circle.moveTo({ x: 2, y: 2 });
      assert.isOk(actual instanceof Circle);
      assert.deepStrictEqual(actual, expected);
    });
    it("should give circle if same center is passed", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.moveTo({ x: 1, y: 2 });
      assert.isOk(actual instanceof Circle);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("#covers", () => {
    it("should check if point passed is in circle", () => {
      const circle = new Circle({ x: 6, y: 1 }, 7);
      const point = new Point(6, 3);
      assert.ok(circle.covers(point));
    });
    it("should check if point passed is not in circle", () => {
      const circle = new Circle({ x: 6, y: 2 }, 7);
      const point = new Point(13, 1);
      assert.notOk(circle.covers(point));
    });
    it("should check if point instance passed", () => {
      const circle = new Circle({ x: 6, y: 1 }, 7);
      const point = { x: 13, y: 1 };
      assert.notOk(circle.covers(point));
    });
  });
});
