
const os = require('os');



var platform = os.platform();
var osType = os.type();
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
var EOL = os.EOL;

const myObject = { platform: platform, osType: osType, freeMemory: freeMemory, totalMemory: totalMemory, EOL: EOL }


module.exports = myObject;