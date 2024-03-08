class Pessoa{
    nome
    idade
    profissao

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

let cli = new Cliente("João", 25, "Programador", "9999-9999","joao@joao", "2024-01-01")
console.log(cli)