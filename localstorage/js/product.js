let key = "cart"

document.getElementById("push").addEventListener("click", () => {
    let price = Number(document.getElementById("price").innerText) // тег куди не можна вводити з клавіатури
    let nameInput = document.getElementById("name").innerText // тег куди можнна вводити з клавіатури
    let amount = document.getElementById("amount").value
    let k = {
        name: nameInput,
        amount: amount,
        price: price
    }
    if (!localStorage.getItem(key)) {
        let x = []
        x.push(k)
        localStorage.setItem(key, JSON.stringify(x))
    } else {
        let temp = JSON.parse(localStorage.getItem(key))
        temp.push(k)
        localStorage.setItem(key, JSON.stringify(temp))
    }
})
