const http = require('http')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

let data = {}
let count = 0

function print_stuff(){
    if (count == 3){
        for (i in urls){
            console.log(data[urls[i]])
        }
    }
}

function get_http_response(url){
    // console.log(`in get_http_response for ${url}`)
    http.get(url, response => {
        response.on('error', err => {
            throw err
        })

        response.on('data', rec_data => {
            data[url] += rec_data
            // console.log(`in data for ${url}`)

        })

        response.on('end', () => {
            count += 1
            // console.log(`Data from ${url} recieved`)
            print_stuff()
        })
    })


}

for (i in urls){
    data[urls[i]] = ""
    get_http_response(urls[i])
}

// while (count < 3){}


