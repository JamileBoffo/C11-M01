const prompt = require('prompt-sync')();
console.clear();

let aluno1 = prompt('Qual o nome do 1° aluno? ');
let nota1 = +prompt('Qual a nota do 1° aluno? ');
let aluno2 = prompt('Qual o nome do 2° aluno? ');
let nota2 = +prompt('Qual a nota do 2° aluno? ');
let aluno3 = prompt('Qual o nome do 3° aluno? ');
let nota3 = +prompt('Qual a nota do 3° aluno? ');
let aluno4 = prompt('Qual o nome do 4° aluno? ')
let nota4 = +prompt('Qual a nota do 4° aluno? ');

console.log(`
ALUNO (A)       NOTA
${aluno1}       ${nota1}
${aluno2}       ${nota2}
${aluno3}       ${nota3}
${aluno4}       ${nota4}
`)