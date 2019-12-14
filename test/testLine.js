const assert = require("chai").assert;
const Line = require("../src/line");

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
    it("should check if two line are paralled", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 30 });
      const line2 = new Line({ x: 15, y: 8 }, { x: 49, y: 25 });
      assert.ok(line1.isParallelTo(line2));
    });
    it("should check if two line are not paralled", () => {
      const line1 = new Line({ x: 10, y: 15 }, { x: 40, y: 31 });
      const line2 = new Line({ x: 15, y: 9 }, { x: 49, y: 25 });
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
    it("should give x cordinate for given y on a line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      assert.strictEqual(line.findY(6), 2);
    });
  });
});
