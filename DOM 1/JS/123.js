// let x;
// let count = 0
// let headers = document.getElementsByClassName("headers")
// for (let i = 0; i < headers.length; i++) {
//     headers[i].addEventListener("click", () => {
//         let p = document.getElementsByClassName("collapsed")
//         for (let j = 0; j < p.length; j++) {
//             if (i === j) {
//                 x = j
//                 count++
//                 if(count === 2){
//                     p[j].classList.remove("block")
//                     p[j].classList.add("none")
//                     count = 0
//                     break
//                 }
//                 if (p[j].classList.contains("none")) {
//                     p[j].classList.remove("none")
//                     p[j].classList.add("block")
//                 } else {
//                     p[j].classList.add("block")
//                 }
//             } else {
//                 p[j].classList.add("none")
//                 if (p[j].classList.contains("block")) {
//                     p[j].classList.remove("block")
//                     p[j].classList.add("none")
//                 }
//             }
//         }
//     })
// }

// let headers = document.getElementsByClassName("headers")
// for (let i = 0; i < headers.length; i++) {
//     headers[i].addEventListener("click", ()=>{
//         let p = document.getElementsByClassName("collapsed")
//         for(let j = 0; j<p.length; j++){
//             if(i === j){
//                 p[j].style.display = "block"
//             }else{
//                 p[j].style.display = "none"
//             }
//         }
//     })
// }
//
//
// window.addEventListener("DOMContentLoaded", () => {
//     let p = document.getElementsByClassName("collapsed")
//     for (let i = 0; i < p.length; i++) {
//         p[i].style.display = "none"
//     }
// })

let textarea = document.getElementById("textarea")

let color = document.getElementsByClassName("color")
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", () => {
        textarea.style.color = color[i].style.backgroundColor
    })
}
document.getElementById("bolder").addEventListener("click", ()=>{
    if(textarea.style.fontWeight !== "bold") {
        textarea.style.fontWeight = "bold"
    }else{
        textarea.style.fontWeight = "normal"
    }
})

document.getElementById("italic").addEventListener("click", ()=>{
    if(textarea.style.fontStyle !== "italic") {
        textarea.style.fontStyle = "italic"
    }else{
        textarea.style.fontStyle = "normal"
    }
})

document.getElementById("underline").addEventListener("click", ()=>{
    if(textarea.style.textDecoration !== "underline") {
        textarea.style.textDecoration = "underline"
    }else{
        textarea.style.textDecoration = "none"
    }
})

document.getElementById("fontSize").addEventListener("change", ()=>{
    textarea.style.fontSize = document.getElementById("fontSize").value + "pt"
})

document.getElementById("fontFamaly").addEventListener("change", ()=>{
    let select = document.getElementById("fontFamaly")
    let text = select.options[select.selectedIndex].text
    textarea.style.fontFamily = `${text}, sans-serif`
})