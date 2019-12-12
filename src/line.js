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
}

module.exports = Line;
