const prompt = require('prompt-sync')();
console.clear();

function inverter(array){
    var re = array.reverse
    return re
}

var ar = [];
var num = +prompt('Digite um numero: ')
ar.push(num)

console.log();

var confirm = prompt('Deseja adicionar mais um número? ').toUpperCase();

console.log();

while(confirm == 'SIM' || confirm == 'S'){
    var num = +prompt('Digite um numero: ')

    console.log();

    ar.push(num)
    var result = inverter(ar)

    var confirm = prompt('Deseja adicionar mais um número? ').toUpperCase();

    console.log();

    
    if (confirm == 'N' || confirm == 'NAO'){
        console.log(ar)
        console.log(result)
        break
    }
}



