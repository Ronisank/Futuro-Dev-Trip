const prompt = require("prompt-sync")();

const numeros = [];


for (let i = 0; numeros.length < 5; i++) {     
    numero = prompt("Digite um número: "); 
    numeros.push(numero);
   
}
console.log(numeros);