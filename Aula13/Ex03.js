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

function aumento (valor,carg, lista){
    let sprof = []
    let salu = []
    let salprof = 0
    let salalu = 0
    for(let i of lista){
        if (i.cargo == 'PROFESSOR' && carg == 'PROFESSOR'){
            salprof = i.salario + (i.salario * (valor))
            sprof.push(salprof)
        } else if(i.cargo == 'ALUNO' && carg == 'ALUNO'){
            salalu = i.salario + (i.salario * (valor))
            salu.push(salalu)
        }
    }

}

do{
    funcionario = {};
    funcionario.nome = prompt('Digite o nome do funcionário: ').toUpperCase();
    funcionario.cargo = prompt('Digite o cargo do funcionário: ').toUpperCase();
    funcionario.salario = +prompt('Digite o salário do funcionário: ');


    functotal.push(funcionario);

    cont = prompt('Deseja cadastrar mais um funcionário? ').toUpperCase();
} while(cont == 'SIM' || cont == 'S')

var esc = prompt('Qual cargo deve receber aumento salarial? ')
var value = +prompt('Qual valor de acrescimo salarial(em porcentagem)? ')

contafuncionario(functotal)
aumento(value, esc, functotal);