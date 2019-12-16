const Point = require("./point");

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
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
  }

  get length() {
    return this.start.findDistanceTo(this.end);
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
      (this.start.isEqualTo(other.start) && this.end.isEqualTo(other.end)) ||
      (this.start.isEqualTo(other.end) && this.end.isEqualTo(other.start))
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

    const dx = x - this.start.x;
    return dx * this.slope + this.start.y;
  }

  findX(y) {
    if (isNumberNotInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.start.y == this.end.y) return this.start.x;

    const dy = y - this.start.y;
    return dy / this.slope + this.start.x;
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
    if (distance < 0 || distance > this.length) return null;
    const ratio = distance / this.length;
    const x = (1 - ratio) * this.start.x + ratio * this.end.x;
    const y = (1 - ratio) * this.start.y + ratio * this.end.y;
    return new Point(x, y);
  }
  findPointFromEnd(distance) {
    const line = new Line(this.end, this.start);
    return line.findPointFromStart(distance);
  }
}

module.exports = Line;
