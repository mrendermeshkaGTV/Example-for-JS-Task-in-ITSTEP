let text = prompt("text")
let word = prompt("cлово")
text = text.split(" ")
let count = 0
text.forEach((wordInText) => (word === wordInText && count++)) // тип циклу який йде по кожному елементу та перевіряє
alert(`Кількість співпадінь ${count}`)