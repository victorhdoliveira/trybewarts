let email = document.getElementById("email")
let senha = document.getElementById("senha")
let botao = document.getElementById("btn")

    

botao.addEventListener("click", function(event){
    event.preventDefault()
    if (email.value == "tryber@teste.com" & senha.value == 123456){
        alert ("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }  
}
)

