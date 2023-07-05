
// Abstraction -  We use the functions to calculate the area and perimeter. Users do not need to know the implementation details of the functions

class Circle {
    private radius: number;
    private pi: number = Math.PI;

    constructor(radius = 0) {
        this.radius = radius;
    }

    getArea() {
        return this.pi * this.radius * this.radius; 
    }

    getPerimeter() {
        return 2 * this.pi * this.radius;
    }
}

const circle = new Circle(5);
console.log('Area of circle is', circle.getArea().toFixed(2));
console.log('Perimeter of circle is', circle.getPerimeter().toFixed(2));