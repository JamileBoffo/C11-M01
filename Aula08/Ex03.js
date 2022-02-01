const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite o numero para ver sua tabuada: ');

for (let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}