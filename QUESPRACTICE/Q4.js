const http=require('http')

const server= http.createServer((req,res)=>{
  if(req.url=='/'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    res.end('<h1>Welcome to College</h1>');
  }
})