const prompt = require('prompt-sync')();
console.clear();

function numerointeiro (numero){
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

let num = +prompt('Digite um número: ');
let result = numerointeiro(num)
console.log(result)