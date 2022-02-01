const prompt = require('prompt-sync')();
console.clear();

let qua = +prompt('Digite a quantidade de notas a serem inseridas: ');
let no = 0;
let aprovado = [];
let emrec = [];
let reprovado = [];

while (no != qua){
    var not = +prompt(`Digite a ${no + 1}ª nota: `);
    no++
    if (not >= 70){
        aprovado.push(not);
    } 
    if(not > 50 && not < 70){
        emrec.push(not);
    } 
    if (not <= 50){
        reprovado.push(not)
    }
}
console.log(aprovado);
console.log(emrec);
console.log(reprovado);

let tamap = aprovado.length;
let tamer = emrec.length;
let tamrep = reprovado.length;

console.log(`${tamap} alunos foram APROVADOS!`);
console.log(`${tamer} alunos ficaram EM RECUPERAÇÃO!`);
console.log(`${tamrep} alunos foram REPROVADOS!`);

