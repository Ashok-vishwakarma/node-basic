// const cryptoo = require('crypto');

// const passkey = cryptoo.pbkdf2("ashokvishwakarma", "salt", 50000, 10, 'sha256', (err, key) => {

//     return key
// })


// cryptoo.privateDecrypt()





//////////////////////////
const fs = require('fs')
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise resolve ").then(console.log("promise reolsve"))

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log(" 2nd setImmediate"));

    console.log("File Reading CB");
    process.nextTick(() => console.log("nextTick"));

    console.log("Last line of the file.");
})

