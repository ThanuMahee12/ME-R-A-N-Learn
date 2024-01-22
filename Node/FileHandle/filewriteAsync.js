const {writeFile}=require('fs')

writeFile("filetext1.txt", "ThanuMahee Write", (err) =>
{
    if (err)
        console.log(err);
})
