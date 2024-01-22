const {mkdir,mkdirSync}=require("fs")

mkdir("kj/dd",{recursive:true},err=>err&&console.log(err))
mkdirSync("kj/dd/rt")
