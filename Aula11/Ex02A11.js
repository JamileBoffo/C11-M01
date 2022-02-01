const prompt = require('prompt-sync')();
console.clear();

function datacompleta (data){
    let datacompsplit = data.split('/')
    if (datacompsplit[1] == '01'){
        mesporextenso = 'Janeiro'
    } else if(datacompsplit[1] == '02'){
        mesporextenso = 'Fevereiro'
    } else if (datacompsplit[1] == '03'){
        mesporextenso = 'Março'
    } else if (datacompsplit[1] == '04'){
        mesporextenso = 'Abril'
    } else if (datacompsplit[1] == '05'){
        mesporextenso = 'Maio'
    } else if (datacompsplit[1] == '06'){
        mesporextenso = 'Junho'
    }else if (datacompsplit[1] == '07'){
        mesporextenso = 'Julho'
    }else if (datacompsplit[1] == '08'){
        mesporextenso = 'Agosto'
    }else if (datacompsplit[1] == '09'){
        mesporextenso = 'Setembro'
    }else if (datacompsplit[1] == '10'){
        mesporextenso = 'Outubro'
    }else if (datacompsplit[1] == '11'){
        mesporextenso = 'Novembro'
    }else if (datacompsplit[1] == '12'){
        mesporextenso = 'Dezembro'
    } else if(mes < 1 &&  mes > 12){
        console.log('Data invalida')
    }
    console.log(`${datacompsplit[0]} de ${mesporextenso} de ${datacompsplit[2]}`)
}

let datacomp = +prompt('Digite uma data DD/MM/AAAA: ');

datacompleta(datacomp)