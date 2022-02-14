const prompt = require('prompt-sync')();
console.clear();

let num1 = +prompt('Digite um numero: ');
let num2 = +prompt('Digite outro numero: ');

if (num1 > num2){
    console.log(`${num1} é maior que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num2} é maior que ${num1}`);
} else {
    console.log(`${num1} e ${num2} são iguais`);
}

console.log();