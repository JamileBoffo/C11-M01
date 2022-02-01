const prompt = require('prompt-sync')();
console.clear();

console.log('Hoje é dia de eleição');
console.log('Os candidatos são:');
console.log(`
Luis
Jair
Sergio`);
console.log()
let quant = +prompt('Qual a quantidade de eleitores que irão votar? ');

let listaL = [];
let listaJ = [];
let listaS = [];

for (let i = 0; i < quant; i++){
    var voto = prompt('Digite o seu voto: ').toUpperCase()
    while (voto != 'LUIS' && voto != 'JAIR' && voto != 'SERGIO'){
        console.log('Nome não cadastrado como candidato.')
        voto = prompt('Digite novamente o seu voto: ')
        break
    }
    if (voto == 'LUIS'){
        listaL.push(voto);
    }
    if (voto == 'JAIR'){
        listaJ.push(voto);
    }
    if (voto == 'SERGIO'){
        listaS.push(voto)
    }
} 

console.log()

console.log(`Jair recebeu ${listaJ.length} votos`);
console.log(`Luis recebeu ${listaL.length} votos`);
console.log(`Sergio recebeu ${listaS.length} votos`);