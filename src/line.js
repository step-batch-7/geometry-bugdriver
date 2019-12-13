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

  isEqualTo(otherLine) {
    const isSameType = otherLine instanceof Line;
    const startEqual = arePointsEqual(this.start, otherLine.start);
    const endEqual = arePointsEqual(this.end, otherLine.end);
    return isSameType && startEqual && endEqual;
  }
}

module.exports = Line;
