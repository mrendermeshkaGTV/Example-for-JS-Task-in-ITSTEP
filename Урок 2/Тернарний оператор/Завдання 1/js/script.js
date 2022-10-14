document.getElementById("calc").addEventListener("click", () => {
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("y").value)
    x > y ? document.getElementById("result").innerText = x : document.getElementById("result").innerText = y
})
