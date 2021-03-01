const filtered_ls = require('./mymodule.js')
let files_list = []
const dir_path = process.argv[2]
let ext = null
if (process.argv[3]){
    ext = process.argv[3]
}


filtered_ls(dir_path, ext, (err,files_list) => {
    if (err){
        console.log('Some error occurred !!')
    } else {
        for (i in files_list) {
            console.log(files_list[i])
        }
    }
})

