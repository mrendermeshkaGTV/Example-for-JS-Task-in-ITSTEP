let x = Number(prompt("Число х"))
let y = Number(prompt("Число у"))
let sign = prompt("знак")

switch (sign){
    case "+":
        alert(x+y)
        break
    case "-":
        alert(x-y)
        break
    case "*":
        alert(x*y)
        break
    case "/":
        alert(x/y)
        break
    default:
        alert("знак не знайдено")
}
