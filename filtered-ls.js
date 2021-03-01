const fs = require('fs')
let files_list = []
const dir_path = process.argv[2]
let ext = null
if (process.argv[3]){
    ext = process.argv[3]
}


fs.readdir(dir_path, (err,f_list) => {
    if (err){
        throw err
    } else {
        if (ext) {
            files_list = f_list.filter(f => f.includes("." + ext))
        }
        for (let f in files_list){
            console.log(files_list[f])
        }
    }
})