const Point = require("./point");
const Line = require("./line");

class Rectangle {
  #pointB;
  #pointD;
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointC = new Point(pointC.x, pointC.y);
    this.#pointB = new Point(this.pointC.x, this.pointA.y);
    this.#pointD = new Point(this.pointA.x, this.pointC.y);
  }
  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointC.x},${this.pointC.y})]`;
  }
  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Rectangle)) return false;
    return (
      this.pointA.isEqualTo(other.pointA) && this.pointC.isEqualTo(other.pointC)
    );
  }
  get perimeter() {
    return (
      2 *
      (this.pointA.findDistanceTo(this.#pointB) +
        this.#pointB.findDistanceTo(this.pointC))
    );
  }
  get area() {
    return (
      this.pointA.findDistanceTo(this.#pointB) *
      this.#pointB.findDistanceTo(this.pointC)
    );
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const isOnAB = new Line(this.pointA, this.#pointB).hasPoint(point);
    const isOnBC = new Line(this.#pointB, this.pointC).hasPoint(point);
    const isOnCD = new Line(this.pointC, this.#pointD).hasPoint(point);
    const isOnDA = new Line(this.#pointD, this.pointA).hasPoint(point);
    return isOnAB || isOnBC || isOnCD || isOnDA;
  }

  covers(point) {
    return (
      point.x >= this.#pointD.x &&
      point.x <= this.#pointB.x &&
      point.y >= this.#pointD.y &&
      point.y <= this.#pointB.y
    );
  }
}

module.exports = Rectangle;
