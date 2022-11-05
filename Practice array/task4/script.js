let size = 30
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(Math.floor(Math.random() * (-100 - 100) + 100)))
}
let max = -Infinity
let maxIndex = 0
for (let i = 0; i < size; i++) {
    if (max < array[i]) {
        maxIndex = i
    }
}
let nonPair = []
for (let i = 0; i < size; i++) {
    if (array[i] % 2 !== 0) {
        nonPair.push(array[i])
    }
}
if (nonPair.length === 0) {
    nonPair = "Не парних чисел немає"
} else {
    for (let i = 0; i < nonPair.length; i++) {
        for(let j = 0; j < nonPair.length; j++){
            if(nonPair[i] > nonPair[j]){
                let temp = nonPair[i]
                nonPair[i] = nonPair[j]
                nonPair[j] = temp
            }
        }
    }
}
console.log(`Max ${max}, index ${maxIndex}`)
console.log(nonPair)