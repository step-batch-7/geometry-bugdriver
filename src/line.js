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
    if (x < lowerX || x > higherX) {
      return NaN;
    }
    const dx = this.start.x - x;
    return this.slope * dx + this.start.y;
  }
}

module.exports = Line;
