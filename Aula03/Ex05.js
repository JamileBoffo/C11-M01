const prompt = require ('prompt-sync')();
console.clear();

let l1 = +prompt ('Digite um numero: ');
let l2 = +prompt('Digite outro numero: ');
let l3 = +prompt("Digite mais um numero: ");

let a = l1 > l2 && l1 > l3
let b = l2 < l1 && l2 > 13
let c = l3 < l1 && l3 < l2

// if (a >= b + c) {
//     console.log('NAO FORMA TRIANGULO');
// } else if (a**2 == ((b**2) + (c**2))) {
//     console.log('TRIANGULO RETANGULO');
// } else if (a**2 > ((b**2) + (c**2))) {
//     console.log('TRIANGULO OBTUSANGULO');   
// } else if (a**2 < ((b**2) + (c**2))) {
//     console.log('TRIANGULO ACUTANGULO');
// } else if (a == b && a == c) {
//     console.log ('TRIANGULO EQUILATERO')
// } else if(a == b || a == c || b == c){
//     console.log('TRIANGULO ISOSCELES')
// }

if (a>= b + c) {
    console.log('NÃO FORMA TRIANGULO!!')
}

if (a**2 == (b**2 + c**2)) {
    console.log('TRIANGULO RETANGULO');
}

if (a**2 > (b**2 + c**2)) {
    console.log('TRIANGULO OBTUSANGULO');
} else{
    console.log('TRIANGULO ACUTANGULO');
}

if (a == b && a == c) {
    console.log ('TRIANGULO EQUILATERO')
} else if (a == b || a == c || b == c) {
    console.log('TRIANGULO ISOSCELES')
}

console.log();
