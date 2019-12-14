const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  get length() {
    const diffOfX = this.end.x - this.start.x;
    const diffOfY = this.end.y - this.start.y;
    return Math.sqrt(diffOfX ** 2 + diffOfY ** 2);
  }

  get slope() {
    const diffOfX = this.end.x - this.start.x;
    const diffOfY = this.end.y - this.start.y;
    return diffOfY / diffOfX;
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
    if (other === this) return false;
    if (!(other instanceof Line)) return false;
    return this.slope == other.slope;
  }

  findY(x) {
    const [lowerX, higherX] = [this.start.x, this.end.x].sort();
    if (x < lowerX || x > higherX) return NaN;
    if (lowerX == higherX) return this.start.y;

    const dx = this.start.x - x;
    return this.slope * dx + this.start.y;
  }

  findX(y) {
    const [lowerY, higherY] = [this.start.y, this.end.y].sort();
    if (y < lowerY || y > higherY) return NaN;
    if (lowerY == higherY) return this.start.x;

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
}

module.exports = Line;
