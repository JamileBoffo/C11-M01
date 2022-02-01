const prompt = require('prompt-sync')();
console.clear();

let vidaB = +prompt('Digite a quantidade de vida do chefão (entre 10 e 50): ');
while (vidaB < 10 || vidaB > 50){
    console.log('Valor invalido!!');
    vidaB = +prompt('Digite novamente o valor da vida: ');
}
let ataque = +prompt('Agora digite o valor do seu ataque (entre 5 e 10): ');
while (ataque < 5 || ataque > 10) {
    console.log('Valor invalido!!');
    ataque = +prompt('Digite novamente o valor do ataque: ');
}
let result = Math.ceil(vidaB/ataque);
console.log(`O chefão será derrotado em ${result} turnos`);