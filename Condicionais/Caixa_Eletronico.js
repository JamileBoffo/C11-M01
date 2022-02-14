const prompt = require('prompt-sync')();
console.clear();

let saque = +prompt('Digite o valor desejado para o saque(min. R$10 e máx. R$600): R$');
let nota100 = 100;
let nota50 = 50;
let nota10 = 10;
let nota5 = 5;
let nota1 = 1;

if (saque >=100 || saque <100){
    var c1 = Math.floor(saque / 100);
    var n100 = saque % 100;
}  if (saque >= 50 || saque < 50){
    var c2 = Math.floor(n100 / 50);
    var n50 = saque % 50;
} if (saque >= 10 || saque < 10){
    var c3 = Math.floor(n50 / 10);
    var n10 = saque % 10;
} if (saque >= 5 || saque < 5){
    var c4 = Math.floor(n10 / 5);
    var n5 = saque % 5;
} if (saque >= 1 || saque < 1){
    var c5 = Math.floor(n5 / 1);
}

console.log(`Voce vai receber 
${c1} notas de 100,  
${c2} notas de 50,
${c3} notas de 10,
${c4} notas de 5,
${c5} notas de 1`)