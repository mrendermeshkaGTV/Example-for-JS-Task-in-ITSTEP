function task1(x,y){
    if(x > y){
        return y
    }else {
        return x
    }
}
alert(task1(Number(prompt("x")), Number(prompt("y"))))
//**************************//
function task2(x, pow){
    return Math.pow(x, pow)
}
let x = task2(Number(prompt("x")), Number(prompt("power")))
alert(x)
//*******************************//
function task3(x,y,sign){
   let result;
    switch (sign){
        case "+":
            result = x+y
            break
        case "-":
            result = x-y
            break
        case "*":
            result = x*y
            break
        case "/":
            result = x/y
            break
        default:
            alert("знак не знайдено")
            result = 0
    }
    return result
}
let x1 = Number(prompt("Число х"))
let y = Number(prompt("Число у"))
let sign = prompt("знак")
let res = task3(x1,y,sign)
alert(res)
//*******************************//

function task4(x){
    let d  = 0;
    for(let i = 0; i < x+1; i++){
        if(x%i===0){
            d++
        }
    }
    if(d > 2){
        return "Не просте"
    }else {
        return "Просте"
    }
}

alert(task4(Number(prompt('Введіть число'))))
//************************//
function task5(x){
    let string = "";
    for(let i = 2; i<10;i++){
        string += `${x}*${i} = ${x*i}`
    }
    return string
}

alert(task5(Number(prompt("Введіть номер таблиці"))))
//************************//
function task6(x,y){
    let d = x/y
    let f = x/y
    f = Math.floor(f)
    d = d - f
    return d
}
alert(task6(Number(prompt("x")), Number(prompt("y"))))
//*************************//
function task7() {
    let count = Number(prompt("к-сть чисел"))
    if (count < 0) {
        count = 1
    }
    if (count > 5) {
        count = 5
    }
    let array = []
    for (let i = 0; i < count; i++)
    {
        array.push(Number(prompt("Число:")))
    }
    let summ = 0
    for(let i = 0; i < count; i++){
        summ+=array[i]
    }
    alert(summ)
}

task7()
//**************//

function task8(){
    let count = Number(prompt("к-сть чисел"))
    if (count < 0) {
        count = 1
    }
    if (count > 5) {
        count = 5
    }
    let array = []
    for (let i = 0; i < count; i++)
    {
        array.push(Number(prompt("Число:")))
    }
    let max = -Infinity;
    for(let i = 0; i < count; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
alert(task8())
/************/
function task9(min, max, bool){
    let pair = []
    let notPair = []
    for (let i = min; i < max+1; i++){
        if(i%2===0){
            pair.push(i)
        }else {
            notPair.push(i)
        }
    }
    if(bool){
        alert(pair)
    }else {
        alert(notPair)
    }
}
task9(-10, 10, false)
/****************/
function task10(day, month, year){
    let date = new Date(year, month, day)
    date = date.setDate(date.getDate()+1);
    alert(date)
}
task10(18,12,2008)