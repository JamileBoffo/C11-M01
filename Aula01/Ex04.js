const prompt = require('prompt-sync')();
console.clear();

let dias = +prompt('Quantos dias de vida você tem? ');

anos = dias / 365
meses = dias % 12
dias = anos - meses

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias`);
