const http=require("http");
const fs=require("fs");

const myServer = http.createServer((req,res)=>{
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data)=>{
    switch(req.url){
      case '/': res.end("HOME Page");
      break
      case '/about':res.end("About US");
      break
      default: res.end("Error 404");
      
    }
    
    console.log(req.headers);
  });
});

myServer.listen(8000, ()=>console.log("Server Started"));