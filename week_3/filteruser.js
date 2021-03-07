const { filterDirMyPromise } = require('./filterdir')
 
 
async function tester() {
  try {
    const files = await filterDirMyPromise("Folder1", ".js")
    console.log(files)
  } catch (err) {
    console.log(err)
  }
}

async function testerParallel() {
    try {
        const f1 = await filterDirMyPromise("Folder1", ".js");
        const f2 = await filterDirMyPromise("Folder2", ".js");
        const f3 = await filterDirMyPromise("Folder3", ".js");
        console.log("---- sync----", [f1, f2, f3]);
    } catch (err) {
        console.log(err)
    }
}




tester()
