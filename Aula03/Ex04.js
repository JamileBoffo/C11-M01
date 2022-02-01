const prompt = require('prompt-sync')();
console.clear();

let n1 = +prompt('Digite um numero: ');
let n2 = +prompt('Digite outro numero: ');
let result = n1 % n2

if (result == 0) {
    console.log(`${n1} é multiplo por ${n2}`);
} else {
    console.log(`${n1} não é multiplo de ${n2}`)
}