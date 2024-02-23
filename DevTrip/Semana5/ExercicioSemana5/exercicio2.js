const prompt = require("prompt-sync")();
const frutas = ["Banana", "Morango", "Abacaxi"];

frutas.push("Uva");

frutas.shift();

console.log(frutas);