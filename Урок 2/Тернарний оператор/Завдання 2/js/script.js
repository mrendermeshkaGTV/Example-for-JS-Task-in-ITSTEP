document.getElementById("calc").addEventListener("click", () => {
    let x = Number(document.getElementById("x").value)
    x % 5 === 0 ? document.getElementById("result").innerText = "Кратне" : document.getElementById("result").innerText = "Не кратне"
})
