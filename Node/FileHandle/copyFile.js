const {copyFile,copyFileSync } = require("fs");

copyFile("kuname.css", "mycopy.css", err => err && console.log(err))

try {
    copyFileSync("kuname.css", "copye.css")
} catch (error) {
console.error(error);
}
