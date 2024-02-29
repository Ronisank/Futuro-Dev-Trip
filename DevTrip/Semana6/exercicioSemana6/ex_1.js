const prompt = require('prompt-sync')();

const promise = new Promise((resolve, reject) => {
    const parOuImpar = prompt('Digite um número par: ');
    if(parOuImpar % 2 === 0){
        resolve('Número validado é par');
    } else {
        reject('Error: Número informado é ímpar');
    }
}).then((resposta) => {
    console.log(resposta);
}).catch((erro) => {
    console.log(erro);
});