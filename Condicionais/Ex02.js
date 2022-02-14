const prompt = require ('prompt-sync')();
console.clear();

let numal = Math.floor(Math.random() * 10 + 1);
console.log('JOGO DA ADIVINHAÇÃO');
console.log('Tente adivinhar qual o numero que o computador vai escolher (entre 0 e 10)');
let numes = +prompt(`Digite um número: `);

if (numal == numes){
    console.log(`Parabéns! O número escolhido foi ${nuaml}`)
} else {
    console.log(`Que pena, o computador escolheu o número ${numal}`);
}