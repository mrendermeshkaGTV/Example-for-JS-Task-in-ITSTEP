let text = prompt("Текст")
let countOfreplace = text.length - text.split(":").join("").length
for (let i = 0; i < countOfreplace; i++) {
    text = text.replace(":", "%")
}
alert(`Кількість замін ${countOfreplace}, текст пілся заміни ${text}`)