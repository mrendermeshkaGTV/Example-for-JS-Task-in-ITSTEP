let size = 30
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(Math.floor(Math.random() * (-100 - 100) + 100)))
}
console.log(array)
for(let i = 0; i < size-2; i++){
    if(array[i] < 0 && array[i+1] < 0){
        console.log(`${array[i]},${array[i+1]}`)
    }
}
