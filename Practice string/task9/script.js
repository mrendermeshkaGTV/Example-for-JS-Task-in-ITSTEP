let text = prompt()
text = text.split(" ")
for(let i = 0; i < text.length; i++){
    text[i] = text[i][0].toUpperCase() + text[i].slice(1)
}
text = text.join(" ")
alert(text)