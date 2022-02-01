const prompt = require('prompt-sync')();
console.clear();

let tentativas = [];
let lancamentos = 100;
let lan = 0;

let n1 = [];
let n2 = [];
let n3 = [];
let n4 = [];
let n5 = [];
let n6 = [];

while (lan != lancamentos){
    var jogo = Math.ceil(Math.random() * 6);
    tentativas.push(jogo);
    lan++
    if (jogo == 1){
        n1.push(jogo);
    } 
    if (jogo == 2){
        n2.push(jogo);
    } 
    if (jogo == 3){
        n3.push(jogo);
    } 
    if (jogo == 4){
        n4.push(jogo);
    } 
    if (jogo == 5){
        n5.push(jogo);
        
    } 
    if (jogo == 6){
        n6.push(jogo);
    }
}

console.log(tentativas)
console.log("Números 1:", n1.length);
console.log("Números 2:", n2.length);
console.log("Números 3:", n3.length);
console.log("Números 4:", n4.length);
console.log("Números 5:", n5.length);
console.log("Números 6:", n6.length);