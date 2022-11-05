let text = prompt("Текст")
let oldLenght = text.length
let newLenght = oldLenght - text.split("o").join("").length
for (let i = 0; i < text.length; i++) {
    text = text.replace("o", "")
}
alert(`Кількість видалених символів ${newLenght}, Текст після заміни: ${text}`)