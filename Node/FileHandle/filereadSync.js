const fs = require("fs");
const data = fs.readFileSync("filetext.txt", 'utf-8');
console.log(data);
