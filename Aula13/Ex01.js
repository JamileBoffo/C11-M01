const prompt = require('prompt-sync')();
console.clear();

let pessoa = {
    nome: 'Jamile',
    peso: 120,
    idade: 22,
    altura: 1.69,
    envelhecer: function(){
        this.idade++
    },
    engordar: function(){
        this.peso++
    },
    emagrecer: function(){
        this.peso--
    },
    crescer: function(){
        if(this.idade < 21){
            this.idade++
            this.altura += 0.5
        }
    },
    bio: function(){
        console.log(`Nome: ${this.nome}, Peso: ${this.peso}, Idade: ${this.idade}, Altura: ${this.altura}`)
    }
}

pessoa.bio();
console.log();
pessoa.envelhecer();
console.log();
pessoa.engordar();
console.log();
pessoa.bio();