const {open } = require("fs")


open("File.txt", "r", (err,data) =>
{
    if (err)
        console.error(err);
    console.log(data);
})
