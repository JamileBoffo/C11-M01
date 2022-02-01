const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite o número para ver o fatorial: ');
let result = 1;
let linha = ''
for (let i = num; i > 0; i--){
    result = result * i;
    linha = linha + i + ' x '
}

console.log(linha, '=', result)