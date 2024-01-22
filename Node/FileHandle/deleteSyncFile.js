const {unlinkSync } = require("fs")

try {
    unlinkSync("filetext.txt");
} catch (error) {
console.error(error);
}
