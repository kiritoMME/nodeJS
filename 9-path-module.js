const path = require('path')

console.log(path.sep)
// console.log(path)



const filepath = path.resolve('content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.join(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

