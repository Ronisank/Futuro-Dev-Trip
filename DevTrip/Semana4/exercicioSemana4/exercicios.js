//================================================================================================
// exercise 4

// function adicao(num1, num2) {
//     let soma = num1 + num2;
//     function somar(soma) {
//         console.log(soma);
//     }
//     somar(soma);
// }
// adicao(1000, 20); // 30

// //================================================================================================
// //exercise 5

// let usuarios = 0;
// let classificacaoRuim = 0;
// let classificacaoBom = 0;
// let classificacaoExcelente = 0;

// while (usuarios < 4) {
//     usuarios++;
//     let avaliacao = prompt(" Qual sua avaliação para série Stranger Things: (1)Ruim  (2)Bom  (3)Excelente ");
//     if (avaliacao == 1) {
//         classificacaoRuim += 1;
//     } else if (avaliacao == 2) {
//         classificacaoBom += 1;
//     } else if (avaliacao == 3) {
//         classificacaoExcelente += 1;
//     }

// }
// document.write(`${classificacaoRuim} usuário(s) classificaram a série como Ruim. <br>`);
// document.write(`${classificacaoBom} usuário(s) classificaram a série como Boa. <br>`);
// document.write(`${classificacaoExcelente} usuário(s) classificaram a série como Excelente. <br>`);

// //================================================================================================
// //exercise 6

// for (let i = 0; i <= 10; i++) {
//     let tabuada = 5 * i;
//     console.log(`5 x ${i} = ${tabuada}`);
// }

//================================================================================================
//exercise 7

const produtos = {
    hortifruti: 5,
    laticinios: 6,
    carnes: 2,
    peixes:1,
    aves: 9,
}  

let fecharPedido;

do {
    let produto = prompt("Digite o produto: \n (1)Hortifruti \n (2)Laticínios \n (3)Carnes \n (4)Peixes \n (5)Aves \n (6)Fechar pedido ");
    fecharPedido = produto;
    if (produto == 1) {
        produtos.hortifruti += parseInt(prompt("Digite a quantidade de Hortifruti: "));
    } else if (produto == 2) {
        produtos.laticinios += parseInt(prompt("Digite a quantidade de Laticínios: "));
    } else if (produto == 3) {
        produtos.carnes += parseInt(prompt("Digite a quantidade de Carnes: "));
    } else if (produto == 4) {
        produtos.peixes += parseInt(prompt("Digite a quantidade de Peixes: "));
    } else if (produto == 5) {
        produtos.aves += parseInt(prompt("Digite a quantidade de Aves: "));
    } else if (produto == 6) {
        fecharPedido = 6;
    }

} while (fecharPedido !== 6)

let maiorQuantidade = Math.max(produtos.hortifruti, produtos.laticinios, produtos.carnes, produtos.peixes, produtos.aves);
console.log(maiorQuantidade);

if (maiorQuantidade == produtos.hortifruti && maiorQuantidade !== 0) {
    document.write(`O produto com maior quantidade é Hortifruti: ${produtos.hortifruti}`);
} else if (maiorQuantidade == produtos.laticinios && maiorQuantidade !== 0) {   
    document.write(`O produto com maior quantidade é Laticínios: ${produtos.laticinios}`);
} else if (maiorQuantidade == produtos.carnes  && maiorQuantidade !== 0) {    
    document.write(`O produto com maior quantidade é Carnes: ${produtos.carnes}`);
} else if (maiorQuantidade == produtos.peixes && maiorQuantidade !== 0) {
    document.write(`O produto com maior quantidade é Peixes: ${produtos.peixes}`);
} else if (maiorQuantidade == produtos.aves && maiorQuantidade !== 0) {
    document.write(`O produto com maior quantidade é Aves: ${produtos.aves}`);
} else if(maiorQuantidade === 0) {
    document.write("Nenhum produto foi selecionado");
}