const { rmdir, rmdirSync } = require("fs")

rmdir("kj/dd/rt",(err)=>console.log(err))
rmdirSync("kj")
