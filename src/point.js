class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperties(this, {
      x: {
        writable: false,
      },
      y: {
        writable: false,
      },
    });
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(action) {
    return action(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  findDistanceTo(point) {
    if (!(point instanceof Point)) return NaN;
    if (this == point) return 0;
    const dx = point.x - this.x;
    const dy = point.y - this.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
