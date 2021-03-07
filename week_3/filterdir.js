const fs = require('fs')
const util = require('util')

const readdir = util.promisify(fs.readdir);

function filterDir(path, ext, cb) {
    fs.readdir(path, (err, b) => {
        if (err) {
            cb(err)
        }
        const filtered = b.filter(f => f.endsWith(ext))
        cb(null, filtered);
    })
}

function filterDirP(path, ext) {
    return readdir(path)
        .then(files => {
            const filtered = files.filter(f => f.endsWith(ext))
            return filtered
        })
}




//Lav filterDir om til promis-baseret
function filterDirMyPromise(path, ext) {
    return new Promise((resolve, reject) => {
        filterDir(path, ext, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    })
}

//Kør promis-baseret filterdir
async function tester() {
    try {
        const files = await filterDirMyPromise(__dirname, ".js")
        console.log(files)
    } catch (err) {
        console.log(err)
    }
}
//tester()

module.exports.filterDirMyPromise = filterDirMyPromise;

