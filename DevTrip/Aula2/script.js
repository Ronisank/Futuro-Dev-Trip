// Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.
// function parOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return "Par";
//     } else {
//         return "Ímpar";
//     }
// }
// console.log(parOuImpar(10)); // Par
// console.log(parOuImpar(5)); // Ímpar

// Crie uma arrow function que recebe um array de números e calcula a média deles.

// OBS: para pegar o tamanho de um array use nomeDoArray.length

const media = (numeros) => {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}
console.log(media([20, 5, 10, 15,45])); // 3