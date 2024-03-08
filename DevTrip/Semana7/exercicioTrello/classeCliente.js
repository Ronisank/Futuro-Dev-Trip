

class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

let cli = new Cliente("João", 25, "Programador", "9999-9999","joao@joao", "2020-01-01")
console.log(cli)