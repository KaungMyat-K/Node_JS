// creating Server
// step 1 -> create server
// step 2 -> start server

const http = require('http')
const fileSys =  require('fs')
let html;
fileSys.readFile("./Templates/index.html",'utf-8',(err,data)=>{
    html = data
})

// create server
const server = http.createServer((request,response)=>{
    // response.end('hello from the server')
    response.end(html)

    console.log('a new request recieved')
    // console.log(response)
})

// start server
server.listen(8000,'127.0.0.1',()=>{
    console.log('server started!')
})

