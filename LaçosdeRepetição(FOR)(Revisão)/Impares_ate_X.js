const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite um número: ');
let soma = 1
let lista = []

if (num % 2 == 0){
    for (let i = soma; i < num; i = i + 2){
    console.log(i)
    }
} else {
    for (let i = soma; i < num; i = i + 2){
        console.log(i)
    }
}