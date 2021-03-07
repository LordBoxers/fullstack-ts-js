const DosDetector = require("./dosDetector.js")

const myDosDetector = new DosDetector(1000);

myDosDetector.on("works", (e) => {
    console.log(JSON.stringify(e))
} )

myDosDetector.addUrl("12")

myDosDetector.addUrl("12")

setTimeout(function () {
    myDosDetector.addUrl("12")
}, 1000)