const prompt = require('prompt-sync')();
console.clear();

function add (nome, telefone) {
    let list = []
    var cad = {
        nome: nome,
        telefone: telefone
    }
    list.push(cad)
    return list
}


console.log('AGENDA TELEFÔNICA');
console.log()
console.log(`O que deseja fazer?
1. Adicionar contato;
2. Alterar contato;
3. Deletar contato;
4. Consultar contato;
`)
let esc = +prompt('Qual a opção desejada? ');

if (esc == 1){
    let quant = +prompt('Quantos contatos irá adicionar? ');

    for (let i = 0; i < quant; i++); {
        var nome = prompt('Digite o nome: ');
        var tel = prompt('Digite o número de telefone: ')
        let ret = add(nome, tel)
        console.log(ret)
    }

}