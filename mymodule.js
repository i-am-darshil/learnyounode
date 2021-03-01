const { fstat } = require("fs")
const fs = require('fs')

function filtered_ls(dir_name, extension, callback){

    fs.readdir(dir_name, (err, files_list) => {
        if (err) {
            callback(err, [])

        } else {
            if (extension) {
                files_list = files_list.filter(f => f.includes("." + extension))
            }
            callback(null, files_list)
        }
    })

}

module.exports = filtered_ls