//1.2 A)
//Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (that is with the same behaviour as the original filter method).

a = ["horse", "dog", "cat"]
cb = function(x) {
    x=="h";
}
//newArray = a.filter( x => x[0]=="h")
console.log("new array:"+newArray)

function myFilter(array, callback) {
    const newA = [];
    for(i = 0; i<array.length; i++) {
        if(callback(i[0])) {
            newA.push(i);
        }
    }
    return newA
}

console.log(myFilter(a, cb));

//1.2 B)

b = [1,2,3,4,5];
cb2 = function(x) {
    x+2
}

function myMap(array, callback) {
    const newB = []
    for(i = 0; i<array.length; i++) {
        newB.push(callback(array[i]))
    }
    return newB
}

console.log(myMap(b, cb2))

//1.3

myFilter(a, function(element) {
    return element[0]=="h";
})

Array.prototype.myFilter = function (fun) {
    var filtered = [];
    for(let i = 0; i<this.length; i++) {
        if(fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
}