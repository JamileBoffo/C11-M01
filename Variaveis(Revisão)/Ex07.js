const prompt = require('prompt-sync')();
console.clear();

let vari = 42.54;
let ts = (vari* 10) / 100;
let result = vari + ts

console.log(`O valor total da conta com acréscimo de 10% de taxa de serviço é de R$${result.toFixed(2)}`);