const Point = require("./point");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

const isNumberNotInRange = function(range, number) {
  const [min, max] = range.sort((a, b) => a - b);
  return number < min || number > max;
};

const areCollinear = function(point1, point2, point3) {
  const line1 = new Line(point1, point2);
  const line2 = new Line(point2, point3);
  return line1.slope === line2.slope;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  get length() {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  get slope() {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return dy / dx;
  }

  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }

  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
    );
  }

  isParallelTo(other) {
    if (!(other instanceof Line) || this === other) return false;
    if (areCollinear(this.start, this.end, other.start)) return false;
    return this.slope == other.slope;
  }

  findY(x) {
    if (isNumberNotInRange([this.start.x, this.end.x], x)) return NaN;
    if (this.start.x == this.end.x) return this.start.y;

    const dx = this.start.x - x;
    return this.slope * dx + this.start.y;
  }

  findX(y) {
    if (isNumberNotInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.start.y == this.end.y) return this.start.x;

    const dy = this.start.y - y;
    return this.start.x + dy / this.slope;
  }

  split() {
    const midPoint = {
      x: (this.start.x + this.end.x) / 2,
      y: (this.start.y + this.end.y) / 2,
    };
    return [new Line(this.start, midPoint), new Line(midPoint, this.end)];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const line1 = new Line(this.start, point);
    const line2 = new Line(point, this.end);
    return line1.length + line2.length == this.length;
  }

  findPointFromStart(distance) {
    if (!Number.isInteger(distance) || distance < 0 || distance > this.length) {
      return null;
    }
    const ratio = distance / this.length;
    const x = (1 - ratio) * this.start.x + ratio * this.end.x;
    const y = (1 - ratio) * this.start.y + ratio * this.end.y;
    return new Point(x, y);
  }
}

module.exports = Line;
