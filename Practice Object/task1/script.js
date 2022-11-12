// Товари
let x = {
    name: "Blackbbery",
    price: 800,
    color: "black",
    producer: "Blackbbery Inc",
    popularity: 800
}
let y = {
    name: "Xiaomi Redmi X7",
    price: 800,
    color: "darkblue",
    producer: "Xiaomi",
    popularity: 1220
}
let z = {
    name: "Iphone 12pro max",
    price: 9500,
    color: "yellow",
    producer: "Apple",
    popularity: 1100
}
let c = {
    name: "Sumsung",
    price: 3500,
    color: "red",
    producer: "Sumsung",
    popularity: 885
}
//додаємо їх до масиву
let array = [x, y, z, c]
let divarray = []
//відмальовуємо на HTML
for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    h1.innerText = array[i].name
    p.innerText = array[i].price
    div.appendChild(h1)
    div.appendChild(p)
    document.getElementsByClassName("content")[0].appendChild(div)
    divarray.push(div)
}

// фільтри, взалежності від параметрів ми або застосовуємо фільтри або ні
function visibleSort(arr, price = 100000, isPrice = false, color = "FFFFFF", isColor = false, producer = "None", isProducer = false, popularity = 100, isPopularity = false) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(arr[i])
    }
    //якщо isПараметр == true, то тоді фільтр спрацьовує, якщо false то не спрацьовує
    if (isPrice) {
        for (let i = 0; i < arr.length; i++) {
            //0
            //1
            //2
            //3
            if (array[i].price > price) {
                // додаємо індекси непотрібних елементів в масив
                arrRes.push(i)
            }
        }
    }
    if (isColor) {
        for (let i = 0; i < arr.length; i++) {
            if (array[i].color !== color) {
// перевіряємо чи цтого елемента ще немає в масиві непотрібних, якщо нема то добавляємо, якщо є то залишаємо, в наступних аналогічно
                if (!arrRes.includes(i)) {
                    arrRes.push(i)
                }
            }
        }
    }
    if (isProducer) {
        for (let i = 0; i < arr.length; i++) {
            if (array[i].producer !== producer) {
                if (!arrRes.includes(i)) {
                    arrRes.push(i)
                }
            }
        }
    }
    if (isPopularity) {
        for (let i = 0; i < arr.length; i++) {
            if (array[i].popularity > popularity) {
                if (!arrRes.includes(i)) {
                    arrRes.push(i)
                }
            }
        }
    }
    return arrRes
}
// повертаємо або ховаємо елементи залежно від роботи фільтрів
function makeVisibleOrDisabled(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(i)) {
            divarray[i].style.display = "none"
        } else {
            divarray[i].style.display = "block"
        }
    }
}
// до всіх інпутів з класом sorted прикріплюємо подію зміни
let el = document.getElementsByClassName("sorted");
for(let i = 0; i<el.length; i++) {
    el[i].addEventListener("change", () => {
        let isPopularity = 0
        let isProducer = 0
        let isColor = 0
        let isPrice = 0
        let price = 0
        let color = "black"
        let producer = "black"
        let popularity = 0
        document.getElementById("sortByPrice").value !== "" ? isPrice = true : isPrice = false
        document.getElementById("sortByPrice").value !== "" ? price = Number(document.getElementById("sortByPrice").value) : price = 0
        document.getElementById("sortByColor").value !== "" ? isColor = true : isColor = false
        document.getElementById("sortByColor").value !== "" ? color = document.getElementById("sortByColor").value : color = 0
        document.getElementById("SortByProducer").value !== "" ? isProducer = true : isProducer = false
        document.getElementById("SortByProducer").value !== "" ? producer = document.getElementById("SortByProducer").value : producer = 0
        document.getElementById("sortByPopularity").value !== "" ? isPopularity = true : isPopularity = false
        document.getElementById("sortByPopularity").value !== "" ? popularity = Number(document.getElementById("sortByPopularity").value) : popularity = 0
        makeVisibleOrDisabled(visibleSort(array, price, isPrice, color, isColor, producer, isProducer, popularity, isPopularity))
    })
}

