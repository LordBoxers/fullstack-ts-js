const { write } = require('fs');
const http = require('http');
const parta = require('./export_Obj.js');
const DosDetector = require("./dosDetector.js")

const myDosDetector = new DosDetector(5000);

const server = http.createServer((req, res) => {
    myDosDetector.addUrl(req.url);

  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(parta));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log(sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.

myDosDetector.on("works", (e) => {
    console.log(JSON.stringify(e))
} )