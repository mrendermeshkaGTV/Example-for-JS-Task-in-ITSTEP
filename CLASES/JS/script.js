class User{
    constructor(login, password, date) {
        this.login = login
        this.password = password
    }
}
let users = []
/* регистрация*/
    document.getElementById("btn").addEventListener("click", ()=>{
    let newUser = new User(document.getElementById("login1").value, document.getElementById("password").value, date)
    users.push(newUser)
})

/*вхід*/

document.getElementById("btn1").addEventListener("click", ()=>{
    let userLogin = document.getElementById("login").value;
    let userPassword = document.getElementById("password1").value;
    let x = false
    for(let i = 0; i < users.length; i++){
        if(users[i].login === userLogin && users[i].password === userPassword){
            x = true
        }
    }
    if(x){
        document.getElementById("spanError").innerText = "Вхід успішний"
    }else {
        document.getElementById("spanError").innerText = "Логін або пароль не знайдено"
    }
})
