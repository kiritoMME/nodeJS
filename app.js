

const _  = require('lodash')
const list = [1,[1,4,[5],6,7],8]
const nwlist = _.flattenDeep(list)
console.log(nwlist)

    

