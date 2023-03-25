
const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;
const blank=fs.readFileSync('index.html');
const home=fs.readFileSync('./home.html');
const about=fs.readFileSync('./about.html');
const node=fs.readFileSync('./node.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='/'){
        res.end(blank);
    }
    else if(url=='/home'){
        res.end(home);
    }
    else if (url=='/about'){
        res.end(about);
    }
    else if(url=='/node'){
        res.end(node);
    }



})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})



