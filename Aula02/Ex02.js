const prompt = require('prompt-sync')();
console.clear();

let nome = prompt('Qual o seu nome completo? ');
let end = prompt('Qual o seu endereço? ');
let cep = prompt('Qual o seu CEP? ');
let tel = prompt('Qual o seu telefone? ');

console.log();

console.log(nome);
console.log(end);
console.log(cep);
console.log(tel);