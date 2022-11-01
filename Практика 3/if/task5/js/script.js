let x = Number(prompt("x"))
let y = Number(prompt("y"))

if(x > 0 && y > 0){
    alert("1")
}else if(x < 0 && y > 0){
    alert("2")
}else if(x < 0 && y < 0){
    alert("3")
} else if(x > 0 && y < 0){
    alert("4")
} else {
    alert("0")
}