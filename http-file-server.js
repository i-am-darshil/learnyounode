const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const file_path = process.argv[3]

const server = http.createServer((req, res) => {

    let readStream = fs.createReadStream(file_path)

    readStream.on('open', () => {
        readStream.pipe(res)
    })

    readStream.on('error', (err) => {
        throw err
    })

})

server.listen(port)