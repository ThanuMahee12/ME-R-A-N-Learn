const {renameSync,rename}=require("fs")
renameSync("demo.txt", "kuname.css");
rename("kuname.css", "demo.txt", err => err && console.log(err));
