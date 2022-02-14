const prompt = require('prompt-sync')();
console.clear();

function temperatura(num, letra, para){
    if (para == 'C'){
        if(letra == 'F'){
            //Fahrenheit para Celsius
            let fc = (num - 32) / (5/9)
            return fc
        }
        else if(letra == 'K'){
            //Kelvin para Celsius
            let kc = (num - 273.15)
            return kc
        }
    }
    if (para == 'F'){
        if(letra == 'K'){
            //Kelvin para Fahrenheit
            let kf = (num - 273.15) * (9 / 5) + 32
            return kf
        }
        else if(letra == 'C'){
            //Celsius para Fahrenheit
            let cf = num * (9/5) + 32
            return cf
        }
    }
    if (para == 'K'){
        if(letra == 'F'){
            //Fahrenheit para Kelvin
            let fk = (num - 32) * (5 / 9) + 273.15
            return fk
        }
        else if(letra == 'C'){
            //Celsius para Kelvin
            let ck = num + 273.15
            return ck
        }
    }
}

let nm = +prompt('Digite um número para ser convertido em temperatura: ');
let tipo1 = prompt('Digite C para Celsius, K para Kelvin e F para Fahrenheit: ').toUpperCase();
let tipo2 = prompt('Digite a letra para qual base de temperatura você quer fazer a conversão: ').toUpperCase();

let result = temperatura(nm, tipo1, tipo2);

console.log()

console.log(`O resultado da conversão de ${tipo1} para ${tipo2} é de ${result.toFixed(2)}`)