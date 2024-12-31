const http = require('http')
const fileSys =  require('fs')
const url = require('url')
const replaceHtml = require('./Module/replaceHtml')

let html = fileSys.readFileSync("./Templates/index.html",'utf-8')
let productListHtml = fileSys.readFileSync("./Templates/productList.html",'utf-8')
let productDetaisHtml = fileSys.readFileSync("./Templates/productDetails.html",'utf-8')
let products = JSON.parse(fileSys.readFileSync('./Data/products.json','utf-8'))

const server = http.createServer((request,response)=>{
    let {query,pathname:path} = url.parse(request.url,true)

    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
        })
        response.end(html.replace('{{%CONTENT%}}',productListHtml))
    }
    else if(path.toLocaleLowerCase() === '/about'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
        })
        response.end(html.replace('{{%CONTENT%}}','about page'))
    }
    else if(path.toLocaleLowerCase() === '/contact'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
        })
        response.end(html.replace('{{%CONTENT%}}','contact page'))
    }
    else if(path.toLocaleLowerCase() === '/products'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
        })
        if(!query.id){
            let productHmtlArray = products.map((data)=>{
               return  replaceHtml(productListHtml,data)
            }) 
            let res = html.replace('{{%CONTENT%}}',productHmtlArray.join(','))
            response.end(res)
        }else{          
          let res =  replaceHtml(productDetaisHtml,products[query.id])
          response.end(html.replace('{{%CONTENT%}}',res))
        }       
    }
    else{
        response.writeHead(404,{
            'Content-Type' : 'text/html',
        })
        response.end(html.replace('{{%CONTENT%}}','Error 404 : page not found'))
    }  
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started!')
})