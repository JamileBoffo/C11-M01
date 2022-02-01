const prompt = require('prompt-sync')();
console.clear();

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');
let lista = [];

if (num1 > num2){
    for (let soma = num2; soma < num1;){
        soma = soma + 1
        lista.push(soma);
    }
} else if(num1 < num2){
    for (let soma = num1; soma < num2;){
        soma = soma + 1;
        lista.push(soma);
    }
} else{
    console.log(`Os números escolhidos são iguais.`)
}
console.log(lista)