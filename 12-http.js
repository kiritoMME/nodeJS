
const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('<h1>Hello in our Home Page</h1>')
    }
    if(req.url === '/about'){
        res.end('<h1>Hello in our short history</h1>')
    }
    res.end(`
        <h1>Oops..!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a  href = '/' >
    `)
                    })

server.listen(4422)