class Produto {
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida
        } else {
            console.log("Estoque insuficiente")
        }
    }
    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta
    }
    MostrarEstoque() {
        console.log(`O produto: ${this.nome} possui ${this.quantidade} unidades disponíveis`)
    }
    AtualizarPreco(novoValor) {
        this.preco = novoValor
    }
}

let produto1 = new Produto("CANETA BIC AZUL", 1, 5)
produto1.Vender(5)
produto1.Repor(10)
produto1.Vender(12)
produto1.MostrarEstoque()
produto1.AtualizarPreco(6)
console.log(produto1.preco)

// let produto2 = new Produto("Coca-cola", 5, 10)
// produto2.Vender(5)
// produto2.Repor(10)
// produto2.Vender(16)
// produto2.MostrarEstoque()

