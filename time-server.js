const net = require('net')
const port = process.argv[2] || 8000

function zeroCheck(inp){
    return inp < 10 ? "0" + inp : inp
}

const server = net.createServer(socket => {

    socket.on('error', err => {
        throw error
    })
    let date = new Date()

    let year = zeroCheck(date.getFullYear())
    let month = zeroCheck(date.getMonth() + 1)
    let day = zeroCheck(date.getDate())
    let hours = zeroCheck(date.getHours())
    let minutes = zeroCheck(date.getMinutes())
    let formatted_date = ""

    formatted_date = year.toString() + "-" + month.toString() + "-" + day.toString() + " " + hours.toString() + ":" + minutes.toString()
    socket.write(formatted_date)
    socket.end("\n")

}).on('error', err=> {
    throw err
})

server.listen(port)
