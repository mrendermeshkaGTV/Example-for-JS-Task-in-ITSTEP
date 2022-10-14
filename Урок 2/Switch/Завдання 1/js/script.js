

document.getElementById("calc").addEventListener("click", ()=>{
    let m = Number(document.getElementById("mounth").value)

    switch (m){
        case 1:
            document.getElementById("result").innerText = "Січень"
            break;
        case 2:
            document.getElementById("result").innerText = "Лютий"
            break;
        case 3:
            document.getElementById("result").innerText = "Березень"
            break;
        case 4:
            document.getElementById("result").innerText = "Квітень"
            break;
        case 5:
            document.getElementById("result").innerText = "Травень"
            break;
        case 6:
            document.getElementById("result").innerText = "Червень"
            break;
        case 7:
            document.getElementById("result").innerText = "Липень"
            break;
        case 8:
            document.getElementById("result").innerText = "Серпень"
            break;
        case 9:
            document.getElementById("result").innerText = "Вересень"
            break;
        case 10:
            document.getElementById("result").innerText = "Жовтень"
            break;
        case 11:
            document.getElementById("result").innerText = "Листопад"
            break;
        case 12:
            document.getElementById("result").innerText = "Грудень"
            break;
        default:
            document.getElementById("result").innerText = "Місяць невідомий..."
            break;
    }
})