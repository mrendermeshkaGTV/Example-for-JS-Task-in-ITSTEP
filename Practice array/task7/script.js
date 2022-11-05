let size = 30
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(Math.random() * (-100 - 100) + 100))
}

let min = Infinity
for (let i = 0; i < size; i++) {
    if (Math.abs(min) > Math.abs(array[i])) {
        min = array[i]
    }
}
for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++){
        if(array[i] < array[j]){
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array)
console.log(`min by abs ${min}`)