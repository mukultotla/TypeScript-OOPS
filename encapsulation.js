"use strict";
// The private attributes cannot be accessed directly from the outside, but getters and setters allow access to them. This, in essence, is data encapsulation.
class Movie {
    constructor(title = "Movie name", genre = "Movie genre", year = 2018) {
        this._title = title;
        this._genre = genre;
        this._year = year;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get genre() {
        return this._genre;
    }
    set genre(value) {
        this._genre = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
}
const movie = new Movie("Spiderman", "Fiction", 2023);
// movie.printDetails();
// setter
movie.title = "Harry Potter";
// Note that calling the function for getter and setter is not needed. We access them just like class attributes.
// getter
console.log("The title of movie is:", movie.title);
