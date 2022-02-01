const prompt = require('prompt-sync')();
console.clear();

let pop1 = +prompt('Digite a população do país 1: ');
let pop2 = +prompt('Digite a população do país 2: ');

let cont = 0

while(pop1 > pop2){
    console.log('A população do país 1 deve ser menor que o país 2.');
    pop2 = +prompt('Digite novamente a população do país 2: ');
}

console.log();

let tax1 = +prompt('Digite o valor da taxa de crescimento populacional do país 1(em porcentagem): ');
let tax2 = +prompt('Digite o valor da taxa de crescimento populacional do país 2(em porcentagem): ');

console.log();

while(tax2 > tax1){
    console.log('A taxa do país 1 deve ser maior que o país 2.');
    tax1 = +prompt('Digite novamente o valor da taxa de crescimento populacional do país 2(em porcentagem): ')
}

while(pop1 < pop2){
    pop1 = pop1 + (pop1 * (tax1/100))
    pop2 = pop2 + (pop2 * (tax2/100))
    cont++
}console.log(`Foram necessários ${cont} anos para que o país 1 alcançasse ou se igualasse ao país 2`)