const {appendFile}= require("fs")

appendFile("file.txt", "\nYuka Tharsa", (err) =>
{
    if (err)
        console.error(err);
})
