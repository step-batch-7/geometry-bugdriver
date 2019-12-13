const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    return `Line{(${this.start.x},${this.start.y}),(${this.end.x},${this.end.y})}`;
  }

  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
    );
  }

  get length() {
    return Math.sqrt(
      (this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2
    );
  }
}

module.exports = Line;
