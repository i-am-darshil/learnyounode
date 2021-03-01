const http = require('http')

const url = process.argv[2]

let data = ""
let char_count = 0

http.get(url, response => {
    response.setEncoding('utf8')

    response.on('error', err => {
        throw err
    })

    response.on('data', rec_data => {
        char_count += rec_data.length
        data += rec_data
    })

    response.on('end', () => {
        console.log(char_count)
        console.log(data)
    })
})