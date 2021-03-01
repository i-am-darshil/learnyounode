const fs = require('fs')
const file_path = process.argv[2]

let num_lines = 0
let file_contents = ""

fs.readFile(file_path, (err,buffer) => {
    if (err){
        throw err
    } else {
        file_contents = buffer.toString().split('\n')
        num_lines = file_contents.length - 1
        console.log(num_lines )

    }
})
