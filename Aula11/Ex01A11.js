const prompt = require('prompt-sync')();
console.clear();

function contando(soma, operador, soma1){
    if (operador == '+'){
        let conta = soma + soma1
        console.log(conta);
    } else if (operador == '-'){
        let conta = soma - soma1
        console.log(conta)
    } else if(operador == '*'){
        let conta = soma * soma1
        console.log(conta)
    } else if(operador == '/'){
        let conta = soma / soma1
        console.log(conta)
    }
}

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');
let op = prompt('Digite um operador matemático: ');

contando(num1, op, num2);