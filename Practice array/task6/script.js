let size = 10
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(Math.floor(Math.random() * (-100 - 100) + 100)))
}
let max = -Infinity
for (let i = 0; i < size; i++) {
    if (max < array[i]) {
        maxIndex = i
    }
}
let arrayPow = []
for (let i = 0; i < size; i++) {
    if (max !== array[i]) {
        arrayPow.push(Math.pow(array[i], 2))
    }
}
alert(arrayPow)
