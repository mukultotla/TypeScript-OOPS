"use strict";
// Dynamic Polymorphism - Method Overriding
class Animal {
    printAnimal() {
        console.log("Calling from Animal class");
    }
    printAnimalTwo() {
        console.log("Calling again from Animal class");
    }
}
class Tiger extends Animal {
    // method override
    printAnimal() {
        console.log("Calling from Tiger class");
    }
}
let animal = new Animal();
animal.printAnimal();
animal.printAnimalTwo();
let tiger = new Tiger();
animal = tiger;
animal.printAnimal();
// Static polymorphism - Method Overloading
