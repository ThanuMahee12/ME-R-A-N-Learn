const {appendFileSync}=require("fs")


try
{
    for (let i = 0; i < 10; i++)
        appendFileSync("filetext1.txt",`${i}\n`)
} catch (error) {

}
