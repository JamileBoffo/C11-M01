const prompt = require('prompt-sync')();
console.clear();

let lista = [];
let quant = +prompt('Qual a quantidade de números que você deseja adicionar? ');
let soma = 0

for (let i = 0; i < quant; i++){
    var num = +prompt('Digite um numero para ser adicionado: ');
    lista.push(num);    
}
console.log(lista);

let maxi = Math.max(...lista);
let mini = Math.min(...lista)
console.log(`O maior número inserido é o ${maxi} e o menor é ${mini}`);

for (let i of lista){
    soma = soma + i
}
console.log(`A soma de todos os números inseridos é ${soma}`);