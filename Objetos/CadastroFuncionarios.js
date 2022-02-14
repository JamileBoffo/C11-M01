const prompt = require('prompt-sync')();
console.clear();

let cont = '';
let functotal = [];


function contafuncionario(lista){
    let prof = [];
    let alu = [];
    let qtdprof = 0;
    let qtdalu = 0;

    for(let i of lista){
        if (i.cargo == 'PROFESSOR'){
            qtdprof++
            prof.push(i.nome);
        } else if(i.cargo == 'ALUNO'){
            qtdalu++
            alu.push(i.nome);
        }
    }
    console.log()
    console.log(qtdprof)
    console.log()
    console.log(prof)
    console.log()
    console.log(qtdalu)
    console.log()
    console.log(alu)
}


do{
    funcionario = {};
    funcionario.nome = prompt('Digite o nome do funcionário: ').toUpperCase();
    funcionario.cargo = prompt('Digite o cargo do funcionário: ').toUpperCase();
    funcionario.salario = +prompt('Digite o salário do funcionário: ');


    functotal.push(funcionario);

    cont = prompt('Deseja cadastrar mais um funcionário? ').toUpperCase();
} while(cont == 'SIM' || cont == 'S')

contafuncionario(functotal)
