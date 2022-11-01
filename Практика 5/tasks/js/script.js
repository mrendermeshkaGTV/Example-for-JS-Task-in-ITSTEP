function task1(X) {
    let factorial = 1
    for (let i = 1; i < x + 1; i++) {
        factorial *= i
    }
    return factorial
}

alert(task1(5))

/*********************/
function task2(x, y) {
    let array_forward = []
    for (let i = x; i < y + 1; i++) {
        array.push(i)
    }
    console.log(array_forward)
    let array_backward = []
    for (let i = y; i > x - 1; i++) {
        array_backward.push(i)
    }
    console.log(array_backward)
}

task2(8, 15)

/***********************/
function task3(x) {
    x = x.toString()
    let res = ""
    for (let i = x.length - 1; i > -1; i++) {
        res += x[i]
    }
    console.log(`straight ${x}, reversed ${res}`)
}

task3(123654)

/****************************/
function task4(x) {
    x = x.toString()
    let summ = 0
    for (let i = 0; i < x.length; i++) {
        summ+=Number(x[i])
    }
    return summ
}
alert(task4(1234))
/************************/
function task5(x){
    let str = ""
    for(let i = 0; i < x; i++){
        x+="("
    }
    for(let i = 0; i < x; i++){
        x+=")"
    }
    alert(x)
}
task5(12)
/*************************/

