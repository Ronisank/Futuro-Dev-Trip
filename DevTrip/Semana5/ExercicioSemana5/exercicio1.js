const prompt = require("prompt-sync")();
//const frutas = ["Banana", "Morango", "Abacaxi"];
const frutas = [];

for (let i = 0; frutas.length < 3; i++) {
    fruta = prompt("Digite uma fruta: ");
    frutas.push(fruta);
}

console.log(frutas[1]);

