const prompt = require('prompt-sync')();
console.clear();

let quant = +prompt('Digite a quantidade de nomes a serem adicionadas: ');
let tam = []
let lista = [];

for (let i = 0; i < quant; i++){
    var nome = prompt('Digite um nome: ');
    lista.push(nome);
    var nm = lista[i]
    tam.push(nm.length)
    var maxi = (Math.max(...tam));
    var mini = (Math.min(...tam));
}
console.log(lista)
let rev = lista.reverse();
console.log(rev)
console.log(`O maior nome é ${maxi} e o menor nome é ${mini}`)


