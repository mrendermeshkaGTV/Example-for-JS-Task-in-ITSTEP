let hours = Number(prompt("hours"))
let minutes = Number(prompt("minutes"))
let seconds = Number(prompt("seconds"))

if(hours > 24 && hours < 0){
    alert("Години введено не коректно")
}
if(minutes > 60 && minutes < 0){
    alert("Хвилини введено не коректно")
}
if(seconds > 60 && seconds < 0){
    alert("Секунди введено не коректно")
}
