abstract class Geometry {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  abstract area(): number;
}

class Rectangle extends Geometry {
  area() {
    return this.width * this.height;
  }
}

class Square extends Geometry {
  area() {
    return this.width * this.height;
  }
}

class Circle extends Geometry {
  area() {
    return this.width * this.height;
  }
}

test("prueba tipos", () => {
  const geometry = new Circle(10, 10);
  const area = geometry.area();

  expect(area).toEqual(100);
});
