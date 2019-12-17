const Point = require("./point");
const Line = require("./line");

class Rectangle {
  #pointB;
  #pointD;
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointC = new Point(pointC.x, pointC.y);
    this.#pointB = new Point(pointC.x, pointA.y);
    this.#pointD = new Point(pointA.x, pointC.y);
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
    const length = this.pointA.findDistanceTo(this.#pointB);
    const width = this.#pointB.findDistanceTo(this.pointC);
    return 2 * (length + width);
  }
  get area() {
    const length = this.pointA.findDistanceTo(this.#pointB);
    const width = this.#pointB.findDistanceTo(this.pointC);
    return length * width;
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const AB = new Line(this.pointA, this.#pointB);
    const BC = new Line(this.#pointB, this.pointC);
    const CD = new Line(this.pointC, this.#pointD);
    const DA = new Line(this.#pointD, this.pointA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
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
