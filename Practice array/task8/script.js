let size = 30
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(Math.random() * (-100 - 100) + 100))
}
let r = []
for(let i = 0; i < array.length; i+=3){
    r.push([array[i], array[i+1], array[i+2]])
}
console.log(r)

function sum(arr){
    return Math.abs(arr[0])+Math.abs(arr[1])+Math.abs(arr[2])
}

for (let i = 0; i < r.length; i++) {
    for(let j = 0; j < r.length; j++){
        if(sum(r[i]) > sum(r[j])){
            let temp = r[i]
            r[i] = r[j]
            r[j] = temp
        }
    }
}

console.log(r)