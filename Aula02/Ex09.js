const prompt = require('prompt-sync')();
console.clear();

console.log('CONVERSOR DE MOEDAS - REAL / DOLAR');
console.log('----------------------------------');

let real = +prompt('Digite o valor a ser convertido: ');
let dolar = real / 5.46

console.log(`R$${real.toFixed(2)} torna-se U$${dolar.toFixed(2)}`);
