let text = prompt("Текст")
let oldLenght = text.length
let newLenght = oldLenght - text.split(".").join("").length
for (let i = 0; i < text.length; i++) {
    text = text.replace(".", "")
}
alert(`Кількість видалених символів ${newLenght}, Текст після заміни: ${text}`)