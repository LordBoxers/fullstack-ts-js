
const log = require('./logger.js');

log('message');

function sayHello(name) {
    console.log('Hello '+name)
}

//sayHello('Michael');

//console.log();

//var message = "";

//console.log(module)

const path = require('path');

var pathObj = path.parse(__filename);

//console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

//Template string
//ES6 / ES2015 : EXMAScript 6

console.log(`Free Memory but with ES6: ${freeMemory}`)