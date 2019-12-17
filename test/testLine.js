const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", () => {
  describe("#toString", () => {
    it("should give representation of line Object", () => {
      const line = new Line({ x: 2, y: 5 }, { x: 6, y: 5 });
      const expected = "[Line (2,5) to (6,5)]";
      assert.strictEqual(line.toString(), expected);
    });
  });

  describe("#isEqualTo", () => {
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
    it("should check if same instance is passed", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const actual = line1.isEqualTo(line1);
      assert.strictEqual(actual, true);
    });
    it("should check if oposite lines are passed", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 1 });
      const line2 = new Line({ x: 2, y: 1 }, { x: 1, y: 2 });
      assert.ok(line1.isEqualTo(line2));
    });
  });

  describe("#length", () => {
    it("should give length of line when x of startPoint smaller than endPoint", () => {
      const line = new Line({ x: 6, y: 1 }, { x: 13, y: 1 });
      assert.strictEqual(line.length, 7);
    });
    it("should give length of line when x of startPoint greater than endPoint", () => {
      const line = new Line({ x: -4, y: -1 }, { x: -5, y: -1 });
      assert.strictEqual(line.length, 1);
    });
    it("should give length of line when y of startPoint smaller than endPoint", () => {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 6 });
      assert.approximately(line.length, 4.242641, 0.05);
    });
    it("should give length of line when y of startPoint greater than endPoint", () => {
      const line = new Line({ x: 2, y: 7 }, { x: 3, y: 2 });
      assert.approximately(line.length, 5.09902, 0.05);
    });
    it("should give length when line is starting from origin", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 13 });
      assert.approximately(line.length, 13.9283, 0.05);
    });
  });

  describe("#slope", () => {
    it("should give slope of line when x of startPoint smaller than endPoint", () => {
      const line = new Line({ x: 6, y: 1 }, { x: 13, y: 1 });
      assert.strictEqual(line.slope, 0);
    });
    it("should give slope of line when x of startPoint greater than endPoint", () => {
      const line = new Line({ x: -4, y: -2 }, { x: -5, y: -1 });
      assert.strictEqual(line.slope, -1);
    });
    it("should give slope of line when y of startPoint smaller than endPoint", () => {
      const line = new Line({ x: 2, y: 3 }, { x: 5, y: 7 });
      assert.approximately(line.slope, 1.3333333333333, 0.05);
    });
    it("should give slope of line when y of startPoint greater than endPoint", () => {
      const line = new Line({ x: 2, y: 7 }, { x: 3, y: 2 });
      assert.strictEqual(line.slope, -5);
    });
    it("should give slope of line when x of startPoint is equal to endPoint", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 7 });
      assert.strictEqual(line.slope, Infinity);
    });
  });

  describe("#isParallelTo", () => {
    it("should check if two line are parallel", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 30 });
      const line2 = new Line({ x: 15, y: 8 }, { x: 49, y: 25 });
      assert.ok(line1.isParallelTo(line2));
    });
    it("should check if two line are not parallel", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 31 });
      const line2 = new Line({ x: 15, y: 9 }, { x: 49, y: 25 });
      assert.notOk(line1.isParallelTo(line2));
    });
    it("should check if two line are Collinear", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 15 });
      const line2 = new Line({ x: 15, y: 15 }, { x: 49, y: 15 });
      assert.notOk(line1.isParallelTo(line2));
    });
    it("should check if same line instance is passed", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 31 });
      assert.notOk(line1.isParallelTo(line1));
    });
    it("should state if instance of Line is not passed", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 31 });
      const line2 = { start: { x: 1, y: 2 }, end: { x: 2, y: 3 } };
      assert.notOk(line1.isParallelTo(line2));
    });
  });

  describe("#findY", () => {
    it("should give x cordinate for given y on horizontal line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      assert.strictEqual(line.findY(6), 2);
    });
    it("should give x cordinate for given y on vertical line", () => {
      const line = new Line({ x: 2, y: 3 }, { x: 2, y: 7 });
      assert.strictEqual(line.findY(2), 3);
    });
    it("should give NaN if cordinate for given y is not on line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      assert.isNaN(line.findY(9));
    });
  });

  describe("#findX", () => {
    it("should give y cordinate for given x on vertical line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 7 });
      assert.strictEqual(line.findX(6), 2);
    });
    it("should give y cordinate for given x on horizontal line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      assert.strictEqual(line.findX(2), 2);
    });
    it("should give NaN if cordinate for given x is not on line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 2, y: 7 });
      assert.isNaN(line.findX(9));
    });
    it("should give x value for the given y if the y value has a corresponding x value on line", () => {
      const line = new Line({ x: -1, y: 3 }, { x: 3, y: -1 });
      const actualValue = line.findX(1);
      const expectedValue = 1;
      assert.strictEqual(actualValue, expectedValue);
    });
  });

  describe("#split", () => {
    it("should give two half equal lines split from center having positive cordinates", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      const expected = [
        new Line({ x: 2, y: 2 }, { x: 4.5, y: 2 }),
        new Line({ x: 4.5, y: 2 }, { x: 7, y: 2 }),
      ];
      const actual = line.split();
      assert.ok(expected[0].isEqualTo(actual[0]));
      assert.ok(expected[1].isEqualTo(actual[1]));
    });

    it("should give two half equal lines split from center having negetive cordinates", () => {
      const line = new Line({ x: -2, y: -2 }, { x: -8, y: -2 });
      const expected = [
        new Line({ x: -2, y: -2 }, { x: -5, y: -2 }),
        new Line({ x: -5, y: -2 }, { x: -8, y: -2 }),
      ];
      const actual = line.split();
      assert.ok(expected[0].isEqualTo(actual[0]));
      assert.ok(expected[1].isEqualTo(actual[1]));
    });
  });

  describe("#hasPoint", () => {
    it("should state if point lies on line", () => {
      const point = new Point(2, 7);
      const line = new Line({ x: 2, y: 5 }, { x: 2, y: 9 });
      assert.ok(line.hasPoint(point));
    });
    it("should validate if given points are on the line", () => {
      const point = new Point(2, 2);
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.isTrue(line.hasPoint(point));
    });
    it("should state if point does not lie on line", () => {
      const point = new Point(4, 7);
      const line = new Line({ x: 2, y: 5 }, { x: 2, y: 9 });
      assert.notOk(line.hasPoint(point));
    });
    it("should state if instance of point is not passed", () => {
      const p = { x: 2, y: 7 };
      const line = new Line({ x: 2, y: 5 }, { x: 2, y: 9 });
      assert.notOk(line.hasPoint(p));
    });
  });

  describe("#findPointFromStart", () => {
    it("should give point at given distance from start of line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      const expected = new Point(3, 1);
      const actual = line.findPointFromStart(2);
      assert.approximately(actual.x, expected.x, 0.01);
      assert.approximately(actual.y, expected.y, 0.01);
    });
    it("should give null if given distance is smaller than 0", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isNull(line.findPointFromStart(-1));
    });
    it("should give null if given distance is greater than line length", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isNull(line.findPointFromStart(9));
    });
  });

  describe("#findPointFromEnd", () => {
    it("should give point at given distance from start of line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      const expected = new Point(4, 1);
      const actual = line.findPointFromEnd(2);
      assert.approximately(actual.x, expected.x, 0.01);
      assert.approximately(actual.y, expected.y, 0.01);
    });
    it("should give null if given distance is smaller than 0", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isNull(line.findPointFromEnd(-1));
    });
    it("should give null if given distance is greater than line length", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isNull(line.findPointFromEnd(9));
    });
  });
});
