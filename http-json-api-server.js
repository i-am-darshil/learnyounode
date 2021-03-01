const http = require('http')
const url = require('url')
const port = process.argv[2]


const server = http.createServer((req, res) => {

    if (req.method == 'GET'){

        const queryObject = url.parse(req.url, true).query
        const path = url.parse(req.url,true).pathname
        let return_data = {}

        if (path == '/api/parsetime'){
            // console.log(queryObject)
            const date = new Date(queryObject['iso'])

            return_data["hour"] = date.getHours()
            return_data["minute"] = date.getMinutes()
            return_data["second"] = date.getSeconds()


        } else if (path == '/api/unixtime'){
            // console.log(queryObject)
            return_data["unixtime"] = Date.parse(queryObject['iso'])

        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(return_data))
        res.end()



    }


})

server.listen(port)
