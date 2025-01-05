//Syncronous
const fs=require("fs");
const result=fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

//Asynchronous

fs.readFile("./contact.txt", "utf-8", (err, result)=>{
  if(err){
    console.log("Error:",err);
  }
  else{
    console.log(result);
  }
});