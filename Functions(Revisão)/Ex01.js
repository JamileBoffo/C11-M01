const prompt = require('prompt-sync')();
console.clear();

function numeros(num1, num2){
    let adicao = num1 + num2;
    console.log(`Adição: ${adicao}`);
    let subtracao = num1 - num2;
    console.log(`Subtração: ${subtracao}`);
    let multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${multiplicacao}`)
    let divisao = num1 / num2
    console.log(`Divisão: ${divisao}`)
}

let n1 = +prompt('Digite um número: ');
let n2 = +prompt('Digite outro número: ');
numeros(n1, n2)