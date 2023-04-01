const http = require('http');
const fs = require('fs');
const url = require('url');
//const path = require('path');


const arr = [
    {id: '/1', text:'text1'},
    {id: '/2', text:'text2'}
];


const server = http.createServer((req, res) => {
    console.log('REQUEST');
    
    if (req.url === '/img') {
        let img = fs.readFileSync('./img/cat.png')
        res.writeHead(200, {'Content-Type': 'image/png' })
        res.end(img)
    }  
    
    for(let i = 0; i < arr.length; i++){
        if(req.url === arr[i].id){
            res.end(arr[i].text)
        }
    }

   
});

server.listen(3000);
console.log('RUN');

/*
 else  { 
        res.writeHead(200, {'Content-Type': 'text/plain' })
        res.end('Hello!')
    }
    */