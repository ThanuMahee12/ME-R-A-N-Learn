const { readdirSync, readdir } = require("fs")

const files = readdirSync("./");
readdir("../Maill/",(err,files)=>console.log(files))
const y = files.filter(ele => ele.includes('.css'))
console.log(y);
