const prompt = require('prompt-sync')();
console.clear();

let numint = +prompt('Digite um número inteiro: ');
let par = [];
let impar = [];
let num = 0;

while (num != numint){
    num = num + 1
    if(num % 2 == 0){
        par.push(num)
    } if(num % 2 == 1){
        impar.push(num)
    }   
}

console.log(par);
console.log(impar);
