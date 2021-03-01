const fs = require('fs')

const file_path = process.argv[2]
const file_buffer = fs.readFileSync(file_path)
const file_contents = file_buffer.toString().split("\n")
let num_lines = file_contents.length - 1


console.log(num_lines)