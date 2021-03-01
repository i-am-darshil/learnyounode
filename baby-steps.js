// console.log(process.argv)

arr = process.argv.slice(2)
let sum = 0
// console.log(arr)

for (let a in arr){
    sum += Number(arr[a])
    // console.log(a)
}

console.log(sum)