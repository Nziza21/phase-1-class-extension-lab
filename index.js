class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    const [side1, side2, side3] = this.sides;
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;
    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    }
  }
}
const polygon = new Polygon([3, 4, 5]);
console.log(polygon.countSides); // 3
console.log(polygon.perimeter); // 12

const triangle = new Triangle([3, 4, 5]);
console.log(triangle.countSides); // 3
console.log(triangle.perimeter); // 12
console.log(triangle.isValid); // true

const square = new Square([4, 4, 4, 4]);
console.log(square.countSides); // 4
console.log(square.perimeter); // 16
console.log(square.isValid); // true
console.log(square.area); // 16
