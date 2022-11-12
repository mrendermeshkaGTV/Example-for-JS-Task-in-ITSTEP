let key = "cart"

window.addEventListener("DOMContentLoaded", () => {

    let table = document.createElement("table")
    let data = JSON.parse(localStorage.getItem(key))
    let th_name = document.createElement("th")
    th_name.innerText = "Product"
    let th_amount = document.createElement("th")
    th_amount.innerText = "Кількість"
    let th_price = document.createElement("th")
    th_price.innerText = "Ціна"
    let th_fullPrice = document.createElement("th")
    th_fullPrice.innerText = "Загальна ціна"
    let tr = document.createElement("tr")
    tr.appendChild(th_name)
    tr.appendChild(th_amount)
    tr.appendChild(th_price)
    tr.appendChild(th_fullPrice)
    table.appendChild(tr)
    for (let i = 0; i < data.length; i++) {
        let productTr = document.createElement("tr")
        let nametd = document.createElement("td")
        let amounttd = document.createElement("td")
        let pricetd = document.createElement("td")
        let fullpricetd = document.createElement("td")
        nametd.innerText = data[i]["name"]
        amounttd.innerText = data[i]["amount"]
        pricetd.innerText = data[i]["price"]
        fullpricetd.innerText = Number(data[i]["amount"]) * Number(data[i]["price"])
        productTr.appendChild(nametd)
        productTr.appendChild(amounttd)
        productTr.appendChild(pricetd)
        productTr.appendChild(fullpricetd)
        table.appendChild(productTr)
    }
    document.querySelector("#cart").appendChild(table)
})