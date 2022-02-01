const prompt = require('prompt-sync')();
console.clear();

let idade = [];
let altura = [];
let tamanho = 0;

while (tamanho < 5){
    var id = +prompt(`Digite a idade da ${tamanho + 1}° pessoa: `);
    var alt = +prompt(`Digite a altura da ${tamanho + 1}° pessoa: `);
    idade.push(id);
    altura.push(alt);
    tamanho++
}

console.log(idade);
console.log(altura);

let id1 = idade[0];
let id2 = idade[1];
let id3 = idade[2];
let id4 = idade[3];
let id5 = idade[4];
let mdid = (id1 + id2 + id3 + id4 + id5) / 5
console.log (`A média de idade entre as 5 pessoas é de ${mdid}`);

let al1 = altura[0];
let al2 = altura[1];
let al3 = altura[2];
let al4 = altura[3];
let al5 = altura[4];
let mdal = (al1 + al2 + al3 + al4 + al5) / 5;
console.log(`A média de altura entre as 5 pessoas é de ${mdal.toFixed(2)}`);