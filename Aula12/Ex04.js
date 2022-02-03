const prompt = require('prompt-sync')();
console.clear();

function atravessar(posicaoinicial, posicaofinal, distancia, passos){
    minimo = Math.min(posicaoinicial, posicaofinal)
    distancia = minimo + passos
    while (distancia <= posicaofinal){
        passos++
        return distancia
    }
    
}
console.log('Nossa Master Bluemer precisa atravessar a rua, vamos ajudá-la.')
let x = +prompt('Digite um número para a posição inicial: ');
let y = +prompt('Agora digite um número para a posição final: ');
let z
let passos = 1
let result = atravessar(x, y, z, passos)
console.log(`Foram necessários, no minimo, ${result} passos para que a nossa Master Bluemer conseguisse atravessar a rua`)