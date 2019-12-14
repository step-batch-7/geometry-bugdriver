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

  clone() {
    return new Point(this.x, this.y);
  }

  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }
}

module.exports = Point;
