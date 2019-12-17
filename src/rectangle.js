const Point = require("./point");

class Rectangle {
  constructor(pointa, pointc) {
    this.pointa = new Point(pointa.x, pointa.y);
    this.pointc = new Point(pointc.x, pointc.y);
  }
  toString() {
    return `[Rectangle (${this.pointa.x},${this.pointa.y}) to (${this.pointc.x},${this.pointc.y})]`;
  }
  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Rectangle)) return false;
    return (
      this.pointa.isEqualTo(other.pointa) && this.pointc.isEqualTo(other.pointc)
    );
  }
  get perimeter() {
    const pointb = new Point(this.pointc.x, this.pointa.y);
    return (
      2 *
      (this.pointa.findDistanceTo(pointb) + pointb.findDistanceTo(this.pointc))
    );
  }
}

module.exports = Rectangle;
