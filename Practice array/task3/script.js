let size = 20
let array = []
for (let i = 0; i < size; i++) {
    array.push(Number(prompt()))
}
let summ = 0
for (let i = 1; i < size; i += 2) {
    summ += array[i]
}
alert(`сумма ${summ}`)

