document.getElementById("calc").addEventListener("click", () => {
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("y").value)
    let sign = document.getElementById("sign").value

    switch (sign) {
        case "+":
            document.getElementById("result").innerText = (x + y).toString()
            break;
        case "-":
            document.getElementById("result").innerText = (x - y).toString()
            break;
        case "*":
            document.getElementById("result").innerText = (x * y).toString()
            break;
        case "/":
            document.getElementById("result").innerText = (x / y).toString()
            break;
        default:
            document.getElementById("result").innerText = "Невідомий знак"
            break;
    }
})
