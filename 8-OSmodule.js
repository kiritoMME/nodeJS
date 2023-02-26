
const os = require('os')


const user = os.userInfo()
// console.log(user)

// console.log(`The time is ${406298/360/24}`)
// setInterval(() => {
//     console.log(`The System UpTime is ${os.uptime()}`)
// }, 500)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem:   os.freemem(),
}
console.log(currentOS)
