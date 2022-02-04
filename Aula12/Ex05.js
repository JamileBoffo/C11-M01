const prompt = require('prompt-sync')();
console.clear();

function inverter(array){
    let rev = array.reverse()
    return rev
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

    var confirm = prompt('Deseja adicionar mais um número? ').toUpperCase();

    console.log();

    
    if (confirm == 'N' || confirm == 'NAO'){
        console.log(ar)
        let result = inverter(ar)
        console.log(result)
        break
    }
}



