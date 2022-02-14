const prompt = require('prompt-sync')();
console.clear();

let num = prompt('Digite um numero: ');
let cont = num % 2

if (cont == 0) {
    console.log(`O numero ${num} é par!`);
} else {
    console.log(`O numero ${num} é impar!`)
}