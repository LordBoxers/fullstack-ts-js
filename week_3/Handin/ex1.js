const crypto = require('crypto');
const http = require('http');

let size = 48;

//ex1 a
function randByte() {
    obj = {
        title: "6 secure randoms",
        randoms: []
    }

    crypto.randomBytes(48, function (err, buffer) {
        let secureHex = buffer.toString('hex');
        obj.randoms.push({ length: 48, randoms: secureHex })

        crypto.randomBytes(40, function (err, buffer) {
            let secureHex1 = buffer.toString('hex');
            obj.randoms.push({ length: 40, randoms: secureHex1 })

            crypto.randomBytes(32, function (err, buffer) {
                let secureHex2 = buffer.toString('hex');
                obj.randoms.push({ length: 40, randoms: secureHex2 })

                console.log(obj)
            });
        });
    })
}
//randByte()


//ex1 b1
function makeBytePromise(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            if (err) {
                return reject(err);
            }

            let secureHex = buffer.toString('hex');

            resolve(secureHex);
        });
    })
}

//ex1 b2

async function makeSecureParallel() {
    const obj = {
        title: "6 Secure Randoms",
        randoms: []
    }
    try {
        const sec1 = await makeBytePromise(48)
        const sec2 = await makeBytePromise(40)
        const sec3 = await makeBytePromise(32)
        const promises = [sec1, sec2, sec3]
        Promise.all(promises).then((res) => {
            res.forEach(element => {
                obj.randoms.push({length: element.length/2, random: element })
            });
        })
        return await (obj)
    } catch(err) {
        console.log(err)
    }
}

//makeSecureParallel().then(res => console.log(res))

//module.exports.makeSecureParallel = makeSecureParallel;
//module.exports.randByte = randByte;

//ex1 e

//let jsonObj = makeSecureParallel().then(res => JSON.stringify(res))



const server = http.createServer((req, res) => {
    

    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/securerandoms') {
        makeSecureParallel().then((result) => {
            res.write(JSON.stringify(result), null, 2);
            res.end()
        } )
    }
});

//server.on('connection', (socket) => {
//    console.log('New connection');
//})

server.listen(3000);

console.log('Listening on port 3000...');