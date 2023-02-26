

const names = require('./4-names')
const modules = require('./3-modules')
const sayhi = modules

// 
// 
const names2 = require('./6-alternative-flavour')

console.log(names2)
console.log(names2.items[0])
console.log(names2.items[1])
console.log(names2.person['name'])
console.log(names2.person.name)

console.log(names)  
console.log(names.john)

// sayhi(secret)
// console.log(modules.module)
sayhi(names.john)
sayhi(names.peter)