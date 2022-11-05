let text = prompt("текст")
let leftPart = text.slice(-Math.floor(text.length/2))
let temp = text.split(leftPart)[0]
for(let i = 0; i < temp.length; i++){
    temp = temp.replace("п", "*")
}
text = temp + text.slice(text.length/2, text.length)

alert(text)