const fs = require("fs");


const filepath = "filetext.txt"
fs.readFile(filepath, (error, data) => {
    if (error)
        console.error(error);
    console.log(data.toString());
})
