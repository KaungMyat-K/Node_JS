const readLine = require('readline')
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter ur name: ",(name)=>{
    console.log("Your name: "+name)
    rl.close();
})

rl.on('close',()=>{
    console.log('interface close')
    process.exit(0)
})
