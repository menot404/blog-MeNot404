const http = require('http');
const PORT = 3000;
const localhost =  'localhost';
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res)=>{
    console.log(req)
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`)

    //lodash usage example
    const randomNum =  _.random(0, 20);
    console.log(`Random Number: ${randomNum}`);

    //Set header content type
    res.setHeader('content-type', 'text/html');
    let path = './views/';
    
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404
            break;
    }

    //Send HTML file

    fs.readFile(`${path}`, (err, data)=>{
        if(err){
            console.error(err);
            res.end('<h1>Internal Server Error</h1>')
        }else{
            res.end(data);
        }
    })


});

server.listen(PORT, localhost,()=>{
    console.log(`Server is running on port ${PORT}`);
})