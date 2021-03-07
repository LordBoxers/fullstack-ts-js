
function messageDelay(msg, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const upperCase = msg.toUpperCase();
            resolve(upperCase)
        },delay)
    })
}

const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi Class", 700),
    messageDelay("Hi blub", 1700),
    messageDelay("Hi Til", 500),
]

Promise.any(promises).then((upperCased)=> console.log(upperCased))

//messageDelay("Hi class", 1000).then(uMsg => console.log(uMsg))