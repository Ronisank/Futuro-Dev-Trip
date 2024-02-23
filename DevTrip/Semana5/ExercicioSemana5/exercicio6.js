const prompt = require("prompt-sync")();

const numeros = [];


for (let i = 0; numeros.length < 5; i++) {
    numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
}

console.log(numeros);
console.log();

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log("v------Números pares filtrados:-------v");
console.log(pares);