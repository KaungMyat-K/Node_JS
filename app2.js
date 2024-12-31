// read and write files

const fileSys =  require('fs')

// read file sync
// let textIn = fileSys.readFileSync('./Files/input.txt','utf-8')
// console.log(textIn);

// let content = `data read from input.txt: ${textIn} \nDate created ${new Date()}`
// fileSys.writeFileSync('./Files/output.txt',`${content}`)

// read file async
// let textIn1 = fileSys.readFile('./Files/input.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// console.log("read files.......");

// let content1 = `data read from input.txt: ${textIn1} \nDate created ${new Date()}`
// fileSys.writeFile('./Files/output.txt',`${content1}`)

fileSys.readFile("./Files/start.txt",'utf-8',(err,data)=>{
    console.log(data)
    fileSys.readFile(`./Files/${data}.txt`,'utf-8',(err,data1)=>{
        console.log(data1)
        fileSys.readFile(`./Files/append.txt`,'utf-8',(err,data2)=>{
            console.log(data2)
            fileSys.writeFile('./Files/output.txt',`${data1}\n\n${data2}\n\nDate created ${new Date()}`,(err,data3)=>{
                console.log("write files successfully")
            })
        })
    })
})
console.log('read file...');