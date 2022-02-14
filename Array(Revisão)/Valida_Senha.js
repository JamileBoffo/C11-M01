const prompt = require('prompt-sync')();
console.clear();

let senha = prompt('Digite sua senha: ');
let tamanho = senha.length;
let regex = /[0-9]/;
let caracesp = /([~`!@#$%\^&*+=\-\[\]\\';,/{}|\":<>\?])/;

while (tamanho < 8){
    console.log('Senha inválida! A senha precisa ter no mínimo 8 caracteres.');
    senha = prompt('Digite novamente a senha: ');
    if (!regex.test(senha)){
        console.log('Senha invalida! A senha precisa ter no mínimo 1 número.');
        senha = prompt('Digite novamente a senha: ')
    } if (!caracesp.test(senha)){
        console.log('Senha inválida! A senha precisa ter no mínimo 1 caracter especial.');
        senha = prompt('Digite novamente a senha: ');
    }
    break
}
console.log('saiu do looping')