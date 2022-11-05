let text = prompt("text")
text = text.split(" ")
let temp_array = []
let P = prompt("P letter")[0]
let N = prompt("N letter")[0]
for (let i = 0; i < text.length; i++) {
    if(text[i][0] === P && text[i][text[i].length-1] === N){
        temp_array.push(text[i])
    }
}
alert(temp_array.join(" "))