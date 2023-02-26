const {readFileSync, writeFileSync} = require('fs')


console.log('start')
const txt1 = readFileSync('./content/subfolder/test.txt', 'utf-8')
const txt2 = readFileSync('./content/secondtest.txt', 'utf-8')

// console.log(txt1, txt2)
writeFileSync(
    './content/result-sync.txt',
    `Here is the rsult : ${txt1}, ${txt2}`,
    {flag:'a'}
)

console.log('done with this task')
console.log('Starting another one')
