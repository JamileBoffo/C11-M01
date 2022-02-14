console.clear()
var prompt = require('prompt-sync')();

let ano = +prompt('Quantos anos você tem? ');
let meses = +prompt('Quantos meses desde o seu aniversário? ');
let dias = +prompt('Quantos dias? ');

console.log();

ano = ano * 365
meses = meses * 30
dias = ano + meses + dias

console.log(`Você está vivo há ${dias} dias!`);