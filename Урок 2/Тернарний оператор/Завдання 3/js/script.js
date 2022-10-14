document.getElementById("calc").addEventListener("click", () => {
    let x = document.getElementById("x").value
    x == "Земля" || x == "земля" ? document.getElementById("result").innerText = "Привіт землянине!" : document.getElementById("result").innerText = "Привіт інопланетянене"
})
