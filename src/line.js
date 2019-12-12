class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  toString() {
    const className = this.constructor.name;
    return `${className}{startPoint(${this.x1},${this.y1}),endPoint(${this.x2},${this.y2})}`;
  }
  isEqualTo(otherLine) {
    const x1Equal = this.x1 == otherLine.x1;
    const y1Equal = this.y1 == otherLine.y1;
    const x2Equal = this.x2 == otherLine.x2;
    const y2Equal = this.y2 == otherLine.y2;
    return x1Equal && y1Equal && x2Equal && y2Equal;
  }
}

module.exports = Line;
