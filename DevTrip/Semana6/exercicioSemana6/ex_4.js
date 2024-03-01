//Crie uma função que irá pedir 3 informações através do prompt, 
// o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, 
// após isso salve esse objeto com a chave “user” no localStorage.

function userSave() {
    let user = {
        name: prompt("Digite seu nome: "),
        age: prompt("Digite sua idade: "),
        email: prompt("Digite seu email: ")
     }
    localStorage.setItem("user", JSON.stringify(user));
   
    }
userSave();   
