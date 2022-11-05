let x = prompt("Текст до 1000 слів")
x = x.toLowerCase()
x = x.split(" ")
if (x.length > 1000) {
    alert("Дуже багато слів")
} else {
    let count = 0
    let letter = prompt("Літера")
    for (let i = 0; i < x.length; i++) {
        if (x[i][0] === letter[0]) {
            count++;
        }
    }
    alert(`Кількість слів що починається з літери ${letter[0]} = ${count}`)
}