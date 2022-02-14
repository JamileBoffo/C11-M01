const prompt = require('prompt-sync')();
console.clear();

let quant = +prompt('Digite a quantidade de nomes a serem adicionadas: ');
let maior = ''
let lista = [];

for (let i = 0; i < quant; i++){
    var nome = prompt('Digite um nome: ');
    lista.push(nome);
}
console.log(lista)
let rev = lista.reverse();
console.log(rev)

for (let i of lista){
    if (i.length > maior.length){
        maior = i
    }
    
}
let menor = maior
for(let i of lista){
    if(i.length < menor.length){
        menor = i
    }
}
console.log(`O maior nome é ${maior} e o menor nome é ${menor}`)


