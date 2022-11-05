let text = prompt("Текст")
let amountOfReplace = text.length - text.split("a").join("").length
for(let i = 0; i < amountOfReplace; i++){
    text = text.replace("a", "o")
}
alert(`Кількість замін ${amountOfReplace}, текст після замін: ${text}`)