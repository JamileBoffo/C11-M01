const prompt = require('prompt-sync')();
console.clear();

let colunas = +prompt('Digite a quantidade desejada de colunas: ');
let linhas = +prompt('Digite a quantidade desejada de linhas: ');
let lista = [];
let a = 0;

for(i = a; i < linhas; i++){
    for (let i = a; i < colunas + a; i++){
        lista.push(i)
    }
    console.log(lista);
    lista = []
    a++
}   