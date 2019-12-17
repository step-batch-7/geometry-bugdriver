const Point = require("./point");
const Line = require("./line");

const getLengthAndWidth = function(vertexA, vertexC) {
  return [Math.abs(vertexA.x - vertexC.x), Math.abs(vertexA.y - vertexC.y)];
};

const isNumberInRange = function(range, number) {
  const [min, max] = range.sort((a, b) => a - b);
  return number > min && number < max;
};

const getOtherTwoVertex = function(vertexA, vertexC) {
  return {
    vertexB: new Point(vertexC.x, vertexA.y),
    vertexD: new Point(vertexA.x, vertexC.y),
  };
};

class Rectangle {
  constructor(pointA, pointC) {
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
    return 2 * (length + width);
  }

  get area() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return length * width;
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const { vertexB, vertexD } = getOtherTwoVertex(this.vertexA, this.vertexC);
    const AB = new Line(this.vertexA, vertexB);
    const BC = new Line(vertexB, this.vertexC);
    const CD = new Line(this.vertexC, vertexD);
    const DA = new Line(vertexD, this.vertexA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isNumberInRange([this.vertexA.x, this.vertexC.x], point.x) &&
      isNumberInRange([this.vertexA.y, this.vertexC.y], point.y)
    );
  }
}

module.exports = Rectangle;
