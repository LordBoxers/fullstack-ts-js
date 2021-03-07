//let http = require("http");

//interface 1 b
interface IBook{
    title:string
    readonly author:string
    published?: Date
    pages?: number
}

const book1 = {title:"title", author:"author", published: new Date(2020,12,12), pages: 5}
const book2 = {title:"Another title", author:"Same author"}

function testBook(book:IBook) {
    console.log(book.title)
}

testBook(book1)
testBook(book2)

//inferface 1 c
// "If it walks like a duck..." duck typing bestemmer om et object kan bruges i en bestemt sammenhæng.
// her ville det være at book objectet ligner IBook og det kan bruges da de har samme atributer

//interface 1 d
// ved optional atributer betyder det vi kan lave en bog uden published og pages og stadig benytte testBook funktionen.

//interface 1 e
// ved readonly er det umuligt at ændre atributerne efter objekterne er oprettet

//interface 1 f


class Book implements IBook {
    title: string
    author: string
    published?: Date | undefined
    pages?: number | undefined

    constructor(title:string, author:string, published?:Date, pages?:number) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.published = published;
    }

    get title2():string {
        return this.title
    }
}

// interfaces 2 a
interface ImyFunc {
    (s1:string, s2:string, s3:string):string[]    

}
//interfaces 2 b
let toArray:ImyFunc
toArray = function(a:string, b:string, c:string) {
    return [a,b,c];
}
console.log(toArray("b","c","a"))

//interface 2 c
let toUpperArray:ImyFunc
toUpperArray = function(a:string, b:string, c:string) {
    return [a,b,c].map( x=> 
        x.toUpperCase()
    );
}
console.log(toUpperArray("a", "b", "c"))

//interface 2 d
let f2 = function logger(f1: ImyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}

//interfaces 2 e&f
f2(toArray)
f2(toUpperArray)

//Generics a

function reverseArr<A>(ar:Array<A>) {
    return ar.reverse()
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));

//Generics b

class DataHolder<A> {
  value:A

  constructor(value:A) {
      this.value = value;
  }
  get () {
      return this.value
  }
  set (v:A) {
      this.value = v
  }

}

let d = new DataHolder<string>("Hello");
console.log(d.get());
d.set("World");
console.log(d.get());

let d2 = new DataHolder<number>(123);
console.log(d2.get());
d2.set(500);
console.log(d2.get());

//let d3 = new DataHolder<string>(5);

//Classes and Inheritance
abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    get color():string { return this._color}
    abstract toString():string;
  }

class Circle extends Shape {
    r:number;

    get area(): number {
        return Math.PI*Math.pow(this.r, 2);
    }
    get perimeter(): number {
        return Math.PI*2*this.r
    }
    toString(): string {
        return "farve: "+this.color+"radius: "+this.r
    }
    constructor(r:number,colour:string){
        super(colour);
        this.r = r;

    }
}

let circle = new Circle(42,"blå")
console.log(circle.area)
console.log(circle.perimeter)
console.log(circle.toString())

class Cylinder extends Circle {
    h:number;

    get area():number {
        return Math.PI*Math.pow(this.r, 2);
    }
    get volume():number {
        return (Math.PI*Math.pow(this.r, 2)*this.h);
    }
    get perimeter():number {
        throw "not implemented yet"
    }
    get height():number {
        return this.h
    }
    set height(he:number) {
        this.h = he
    }
    
    toString(): string {
        return "farve: "+this.color+"radius: "+this.r
    }
    constructor(r:number, colour:string, h:number){
        super(r, colour)
        this.h = h;
    }
}

let cyl = new Cylinder(42, "farve", 5)

