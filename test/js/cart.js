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
    let th_delete = document.createElement("th")
    th_delete.innerText = "Видалити позицію"

    tr.appendChild(th_name)
    tr.appendChild(th_amount)
    tr.appendChild(th_price)
    tr.appendChild(th_fullPrice)
    tr.appendChild(th_delete)
    table.appendChild(tr)
    for (let i = 0; i < data.length; i++) {
        let productTr = document.createElement("tr")
        let nametd = document.createElement("td")
        let amounttd = document.createElement("td")
        let pricetd = document.createElement("td")
        let fullpricetd = document.createElement("td")
        let deleteTd = document.createElement("td")
        nametd.innerText = data[i]["product"].brand + " " + data[i]["product"].type + " " + data[i]["product"].color
        let input = document.createElement("input");
        input.value = data[i]["amount"]
        input.type = "number"
        input.min = "1"
        input.addEventListener("change", ()=>{
            data[i]["amount"] = input.value
            localStorage.setItem("cart", JSON.stringify(data))
            location.reload()
        })
        amounttd.appendChild(input)
        pricetd.innerText = data[i]["product"].price
        fullpricetd.innerText = Number(data[i]["product"].price) * Number(data[i]["amount"])
        let btn = document.createElement("button")
        btn.innerText = "Видалити"
        btn.addEventListener("click", ()=>{
            let temp = []
            for(let j=0; j<data.length; j++){
                if(j!==i) {
                    temp.push(data[j])
                }
            }
            data = temp
            localStorage.setItem("cart", JSON.stringify(data))
            location.reload()
        })

        deleteTd.appendChild(btn)
        productTr.appendChild(nametd)
        productTr.appendChild(amounttd)
        productTr.appendChild(pricetd)
        productTr.appendChild(fullpricetd)
        productTr.appendChild(deleteTd)
        table.appendChild(productTr)
    }
    document.querySelector("#cart").appendChild(table)
})