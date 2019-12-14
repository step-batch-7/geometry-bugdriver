class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(visitFunc) {
    return visitFunc(this.x, this.y);
  }
}

module.exports = Point;
