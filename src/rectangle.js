const Point = require("./point");
const Line = require("./line");

const getLengthAndWidth = function(vertexA, vertexC) {
  return [vertexA.x - vertexC.x, vertexA.y - vertexC.y];
};

class Rectangle {
  #vertexB;
  #vertexD;
  constructor(pointA, pointC) {
    this.#vertexB = new Point(pointC.x, pointA.y);
    this.#vertexD = new Point(pointA.x, pointC.y);
    Object.defineProperties(this, {
      vertexA: {
        value: new Point(pointA.x, pointA.y),
        writable: false,
      },
      vertexC: {
        value: new Point(pointC.x, pointC.y),
        writable: false,
      },
    });
  }
  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
  }
  isEqualTo(other) {
    if (other === this) return true;
    if (!(other instanceof Rectangle)) return false;
    return (
      this.vertexA.isEqualTo(other.vertexA) &&
      this.vertexC.isEqualTo(other.vertexC)
    );
  }
  get perimeter() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return 2 * (Math.abs(length) + Math.abs(width));
  }
  get area() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return Math.abs(length * width);
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const AB = new Line(this.vertexA, this.#vertexB);
    const BC = new Line(this.#vertexB, this.vertexC);
    const CD = new Line(this.vertexC, this.#vertexD);
    const DA = new Line(this.#vertexD, this.vertexA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    const [minX, maxX] = [this.vertexA.x, this.vertexC.x].sort((a, b) => a - b);
    const [minY, maxY] = [this.vertexA.y, this.vertexC.y].sort((a, b) => a - b);

    return (
      point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY
    );
  }
}

module.exports = Rectangle;
