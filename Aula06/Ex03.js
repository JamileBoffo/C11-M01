const prompt = require('prompt-sync')();
console.clear();

let esc = +prompt('Qual a quantidade de alunos? ');
let alunos = [];
let notas = [];
let quan = 0;

while (quan != esc){
    var al = prompt('Digite o nome do(a) aluno(a): ');
    var nt = +prompt('Digite a nota deste aluno(a): ');
    alunos.push(al);
    notas.push(nt);
    quan++
    
}
console.log(alunos);
console.log(notas);

