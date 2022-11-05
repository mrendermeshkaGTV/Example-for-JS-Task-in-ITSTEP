let array = []
let N = Number(prompt("Кількість чисел?"))
for (let i = 0; i < N; i++) {
    array.push(Number(prompt()))
}
let positive = []
let negative = []
for (let i = 0; i < N; i++) {
    if (array[i] > 0) {
        positive.push(array[i])
    } else {
        negative.push(array[i])
    }
}
console.log(`positive ${positive}`)
console.log(`negative ${negative}`)
console.log(`all ${array}`)