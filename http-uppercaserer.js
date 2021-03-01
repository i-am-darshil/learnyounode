const http = require('http')
// var qs = require('querystring');
const port = process.argv[2]
const server = http.createServer((req, res) => {

    if (req.method == 'POST'){
        var body = ''

        req.on('data', data => {
            body += data
        })

        if (body.length > 1e6){
            req.connection.destroy()
        }

        req.on('end', () => {
            // var post = qs.parse(body);

            res.write(body.toUpperCase())
            res.end()
        })

    }

    // console.log(req.method)
    // console.log(req.body)
    // res.write()
})

server.listen(port)