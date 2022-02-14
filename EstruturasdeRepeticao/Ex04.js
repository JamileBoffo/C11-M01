const prompt = require('prompt-sync')();
console.clear();

let escpc = Math.trunc(Math.random() * 10);
let escuser = +prompt('Escolha um numero: ');
let palpites = 0;

while (escpc != escuser){
    console.log(`Que pena, você errou!`)
    escuser = +prompt('Digite novamente um número: ');
    if (escpc > escuser){
        console.log(`O número escolhido pelo computador é maior do que ${escuser}`);
    } if (escpc < escuser){
        console.log(`O número escolhido pelo computador é menor doq ${escuser}`);
    } 
    palpites++
} 

console.log(`Parabéns!! Você e o computador pensaram no mesmo número`)
console.log(`Foi preciso ${palpites} palpites até que você acertasse.`);