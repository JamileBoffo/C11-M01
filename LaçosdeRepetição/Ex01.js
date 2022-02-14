const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite um número: ');
let div = 0;

for (let i = 0; i <= num; i++){
    if(num % i == 0){
        div++
    }
} 

if(div == 2){
    console.log('É primo');
} else{
    console.log('Não é primo')
}