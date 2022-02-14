console.clear();
const prompt = require('prompt-sync')();

let nota1 = +prompt('Qual foi a primeira nota? ')
let nota2 = +prompt('Qual foi a segunda nota? ')

console.log(`Considerando as notas ${nota1} e ${nota2}, calcula-se a média de ${((nota1 * 4) + (nota2 * 6)) / (4 + 6)}`);