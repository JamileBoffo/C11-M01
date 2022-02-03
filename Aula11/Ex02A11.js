const prompt = require('prompt-sync')();
console.clear();

function datacompleta (data){
    let datasplit = data.split('/')
    let mes = datasplit[1]
    let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    console.log(`${datasplit[0]} de ${meses[mes-1]} de ${datasplit[2]}`)
}

let data = prompt('Digite uma data DD/MM/AAAA: ');
datacompleta(data)