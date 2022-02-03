const prompt = require('prompt-sync')();
console.clear();

function area(base, altura){
    let a = base * altura
    return a
}

let b = +prompt('Digite um valor para base: ')
let al = +prompt('Digite um valor para altura: ')
let result = area(b, al)
console.log(`A area do retangulo com base ${b} e altura ${al} é de ${result}`)