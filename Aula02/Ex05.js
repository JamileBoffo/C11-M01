const prompt = require('prompt-sync')();
console.clear();

let op1 = 'Carro'
let op2 = 'Casa'
let op3 = 'Viagem'
let op4 = 'Casamento'
let nome = prompt(`Olá, seja bem vindo(a)!! Qual o seu nome? `);

console.log(`${nome}, temos algumas opções para você, fique a vontade para escolher!!
${op1}
${op2}
${op3}
${op4}`);

let esc = prompt('Qual a opção desejada? ')
console.log(`A opção escolhida foi ${esc}!! Parabéns`)
