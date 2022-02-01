const prompt = require('prompt-sync')();
console.clear();

let numpar = +prompt('Digite um número par: ');

while (numpar % 2 != 0){
    console.log('Número inválido!')
    numpar = +prompt('Digite novamente um número par: ');
}