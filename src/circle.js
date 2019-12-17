const Point = require("./point");

class Circle {
  constructor(center, radius) {
    Object.defineProperties(this, {
      center: {
        value: new Point(center.x, center.y),
        writable: false,
      },
      radius: {
        value: radius,
        writable: false,
      },
    });
  }
  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }
  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Circle)) return false;
    return this.center.isEqualTo(other.center) && this.radius == other.radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.radius == point.findDistanceTo(this.center);
  }
  moveTo(center) {
    return new Circle({ x: center.x, y: center.y }, this.radius);
  }
  covers(point) {
    if (!(point instanceof Point)) return false;
    return point.findDistanceTo(this.center) <= this.radius;
  }
}

module.exports = Circle;
