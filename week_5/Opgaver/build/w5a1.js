"use strict";
//let http = require("http");
const book1 = { title: "title", author: "author", published: new Date(2020, 12, 12), pages: 5 };
const book2 = { title: "Another title", author: "Same author" };
function testBook(book) {
    console.log(book.title);
}
testBook(book1);
testBook(book2);
//inferface 1 c
// "If it walks like a duck..." duck typing bestemmer om et object kan bruges i en bestemt sammenhæng.
// her ville det være at book objectet ligner IBook og det kan bruges da de har samme atributer
//interface 1 d
// ved optional atributer betyder det vi kan lave en bog uden published og pages og stadig benytte testBook funktionen.
//interface 1 e
// ved readonly er det umuligt at ændre atributerne efter objekterne er oprettet
//interface 1 f
class Book {
    constructor(title, author, published, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.published = published;
    }
    get title2() {
        return this.title;
    }
}
//interfaces 2 b
let toArray;
toArray = function (a, b, c) {
    return [a, b, c];
};
console.log(toArray("b", "c", "a"));
//interface 2 c
let toUpperArray;
toUpperArray = function (a, b, c) {
    return [a, b, c].map(x => x.toUpperCase());
};
console.log(toUpperArray("a", "b", "c"));
//interface 2 d
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
//interfaces 2 e&f
f2(toArray);
f2(toUpperArray);
//Generics a
function reverseArr(ar) {
    return ar.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
//Generics b
class DataHolder {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(v) {
        this.value = v;
    }
}
let d = new DataHolder("Hello");
console.log(d.get());
d.set("World");
console.log(d.get());
let d2 = new DataHolder(123);
console.log(d2.get());
d2.set(500);
console.log(d2.get());
//let d3 = new DataHolder<string>(5);
//Classes and Inheritance
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
}
class Circle extends Shape {
    constructor(r, colour) {
        super(colour);
        this.r = r;
    }
    get area() {
        return Math.PI * Math.pow(this.r, 2);
    }
    get perimeter() {
        return Math.PI * 2 * this.r;
    }
    toString() {
        return "farve: " + this.color + "radius: " + this.r;
    }
}
let circle = new Circle(42, "blå");
console.log(circle.area);
console.log(circle.perimeter);
console.log(circle.toString());
class Cylinder extends Circle {
    constructor(r, colour, h) {
        super(r, colour);
        this.h = h;
    }
    get area() {
        return Math.PI * Math.pow(this.r, 2);
    }
    get volume() {
        return (Math.PI * Math.pow(this.r, 2) * this.h);
    }
    get perimeter() {
        throw "not implemented yet";
    }
    get height() {
        return this.h;
    }
    set height(he) {
        this.h = he;
    }
    toString() {
        return "farve: " + this.color + "radius: " + this.r;
    }
}
let cyl = new Cylinder(42, "farve", 5);
//# sourceMappingURL=w5a1.js.map