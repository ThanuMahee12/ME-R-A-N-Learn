const fs = require("fs");
fs.unlink("file.txt",(err)=>err&&console.log(err))
