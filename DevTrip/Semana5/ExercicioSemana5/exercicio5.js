const prompt = require("prompt-sync")();

const numeros = [];


for (let i = 0; numeros.length < 5; i++) {
    numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
}

console.log(numeros);
console.log();
const numerosOrdenados = [...numeros]
numerosOrdenados.sort((a, b) => a - b);

console.log();
console.log(numerosOrdenados);