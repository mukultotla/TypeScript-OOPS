"use strict";
// Abstraction -  We use the functions to calculate the area and perimeter. Users do not need to know the implementation details of the functions
class Circle {
    constructor(radius = 0) {
        this.pi = Math.PI;
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
