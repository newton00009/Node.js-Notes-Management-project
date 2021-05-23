const fs = require('fs')


// const person={
//     name: "Andrew Mead",
//     planet: 'Earth',
//     age:"21"
// }

//const bookjson = JSON.stringify(person)
//fs.writeFileSync('file.json',bookjson)
//const databuff=fs.readFileSync('file.json')
//const data = databuff.toString()
//console.log(JSON.parse(data).author)
//const bookobj = JSON.parse(bookjson)
//console.log(bookobj.author) 


const databuffer=fs.readFileSync('file.json')
const data = databuffer.toString()
const data1 = JSON.parse(data)
data1.name='NILESh VERMA'
data1.age='19'
 const datal = JSON.stringify(data1)
fs.writeFileSync('file.json',datal)

