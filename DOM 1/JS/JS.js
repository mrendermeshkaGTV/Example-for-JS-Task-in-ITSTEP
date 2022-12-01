let headers = document.getElementsByClassName("headers")
for(let i = 0 ; i < headers.length; i++){
    headers[i].addEventListener("click", ()=>{
        let p = document.getElementsByClassName("collapsed")
        for(let j = 0; j<p.length; j++){
            if(i === j){
                if(p[j].classList.contains("none")){
                    p[j].classList.remove("none")
                    p[j].classList.add("block")
                }else{
                    p[j].classList.add("block")
                }
            }else{
                p[j].classList.add("none")
                if(p[j].classList.contains("block")){
                    p[j].classList.remove("block")
                    p[j].classList.add("none")
                }
            }
        }
    })
}