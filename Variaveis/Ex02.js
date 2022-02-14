const prompt = require('prompt-sync')();
console.clear();

let peca1 = prompt('Qual o produto desejado? ');
let np1 = +prompt('Qual a quantidade? ');
let vp1 = +prompt('Qual o valor unitário do produto? R$ ');

console.log()

let peca2 = prompt('Qual o outro produto desejado? ');
let np2 = +prompt('Qual a quantidade? ');
let vp2 = +prompt('Qual o valor unitário do produto? R$ ');

console.log()

console.log(`O valor total a ser pago por ${np1} ${peca1} e ${np2} ${peca2}, é de R$${(np1 * vp1) + (np2 * vp2)}`);