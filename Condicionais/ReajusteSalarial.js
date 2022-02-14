const prompt = require('prompt-sync')();
console.clear();

console.log('Como funcionario das empresas @.com, você terá o seu salário reajustado baseado nos valores.')
let sal = +prompt('Digite o valor do seu salário atual: R$ ');

if (sal <= 280) {
    let aum = (sal*20)/100
    let novosal = sal + aum;
    console.log();
    console.log(`Antes do reajuste seu salario era de R$${sal.toFixed(2)}`);
    console.log(`O percentual aplicado com base no seu salario é de 20%`);
    console.log(`O valor do aumento é de R$${aum.toFixed(2)}`);
    console.log(`Após o aumento, seu salario ficou no valor de R$${novosal.toFixed(2)}`);
} if (sal > 280 && sal < 700) {
    let aum = (sal*15)/100
    let novosal = sal + aum;
    console.log();
    console.log(`Antes do reajuste seu salario era de R$${sal.toFixed(2)}`);
    console.log(`O percentual aplicado com base no seu salario é de 15%`);
    console.log(`O valor do aumento é de R$${aum.toFixed(2)}`);
    console.log(`Após o aumento, seu salario ficou no valor de R$${novosal.toFixed(2)}`);
} if (sal > 700 && sal < 1500){
    let aum = (sal*10)/100
    let novosal = sal + aum;
    console.log();
    console.log(`Antes do reajuste seu salario era de R$${sal.toFixed(2)}`);
    console.log(`O percentual aplicado com base no seu salario é de 10%`);
    console.log(`O valor do aumento é de R$${aum.toFixed(2)}`);
    console.log(`Após o aumento, seu salario ficou no valor de R$${novosal.toFixed(2)}`);
} if (sal >= 1500){
    let aum = (sal*5)/100
    let novosal = sal + aum;
    console.log();
    console.log(`Antes do reajuste seu salario era de R$${sal.toFixed(2)}`);
    console.log(`O percentual aplicado com base no seu salario é de 5%`);
    console.log(`O valor do aumento é de R$${aum.toFixed(2)}`);
    console.log(`Após o aumento, seu salario ficou no valor de R$${novosal.toFixed(2)}`);
}
 