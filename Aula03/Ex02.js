const prompt = require('prompt-sync')();
console.clear();

let n1 = +prompt('Digite a primeira nota: ');
let n2 = +prompt('Digite a segunda nota: ');
let n3 = +prompt('Digite a terceira nota: ');
let n4 = +prompt('Digite a quarta nota: ')

let md = (n1 + n2 + n3 + n4) / 4

if (md >= 7.0) {
    console.log('APROVADO!!! Parabéns.')
} else if (md >= 5.0){
    console.log('EM RECUPERAÇÃO!! Estude mais.')
} else {
    console.log('REPROVADO!!')
}