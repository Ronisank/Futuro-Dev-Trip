const prompt = require("prompt-sync")();

const numeros = [];


for (let i = 0; numeros.length < 5; i++) {
    numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
}
let soma = numeros.reduce((a, b) => a + b, 0);

console.log();
console.log(numeros);
console.log();
console.log("A soma dos números do array é: " + soma);