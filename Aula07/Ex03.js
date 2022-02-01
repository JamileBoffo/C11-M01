console.clear();

let lista = []
let repet = 20;
let quant = 0

while (quant != 20){
    let num = Math.trunc(Math.random() * 100);
    lista.push(num)
    quant++
}
console.log(lista)
lista.sort(((a, b) => a - b));
console.log(lista);