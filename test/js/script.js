/* створення класу */
class Marker {
    constructor(color, type, brand, price) {
        this.color = color;
        this.type = type;
        this.brand = brand;
        this.price = price
    }
}

/* створення 4х об'єктів класу */
let array = [
    new Marker("green", "alcohol", "Buromax", 17.95),
    new Marker("red", "permonent", "Buromax", 25.70),
    new Marker("yellow", "highlighter", "Buromax", 17.70),
    new Marker("black", "alcohol", "Letter", 18.75)
]
/* відмалювання об'єктів*/
let container = document.querySelector("#container")

for (let i = 0; i < array.length; i++) {

    let div = document.createElement("div")
    div.style.backgroundColor = array[i].color
    div.style.width = "18rem"
    div.style.margin = "0 0 10px 0"
    let h1 = document.createElement("h1")
    h1.innerText = array[i].brand + " " + array[i].type
    h1.style.color = "white";
    let p_strong = document.createElement("p")
    let strong = document.createElement("strong")
    strong.innerText = array[i].price
    strong.style.color = "white"
    p_strong.appendChild(strong)
    div.appendChild(h1)
    div.appendChild(p_strong)
    let input = document.createElement("input")
    input.type = "number"
    input.min = "1";
    input.id = `inp${i}`
    input.placeholder = "Кількість"
    let btn = document.createElement("button")
    btn.addEventListener("click", () => {
        let am =document.getElementById(`${input.id}`)
        let key = "cart"
        if (!localStorage.getItem(key)) {
            let x = []
            let y = {
                "product" : array[i],
                "amount" : input.value
            }
            x.push(y)
            localStorage.setItem(key, JSON.stringify(x))
        } else {
            let y = {
                "product" : array[i],
                "amount" : input.value
            }
            let temp = JSON.parse(localStorage.getItem(key))
            temp.push(y)
            localStorage.setItem(key, JSON.stringify(temp))
        }
    })
    btn.innerText = "Придбати"
    div.appendChild(input)
    div.appendChild(btn)
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.justifyContent = "center"
    div.style.border = "1px solid black"
    container.appendChild(div)
}