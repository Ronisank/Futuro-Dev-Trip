const prompt = require("prompt-sync")();

const numeros = [];


for (let i = 0; numeros.length < 5; i++) {
    numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
}

console.log(numeros);
console.log();

const quadrados = numeros.map((numero) => numero ** 2);
console.log("v------Array-de-números-Quadrados-------v");
console.log(quadrados);