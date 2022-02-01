console.clear();

let carros = ['Gol', 'Corsa', 'Fiesta', 'Palio', 'Uno'];
let consumo = [3, 2, 4, 1, 5];
let ax = [];
let lit = 0;
let cons = 0;

for (let i = 0; i < 5; i++){
    cons =(1000 / consumo[i]);
    lit = cons.toFixed(2) * 5.50;
    console.log(`O carro ${carros[0 + i]} consome ${cons.toFixed(2)} litros de gasolina para percorrer 1000km e teria um gasto de R$${lit.toFixed(2)} para abastecer.`);
    console.log();
}

console.log(carros);
console.log(consumo);

console.log(`O carro mais economico é o ${carros[4]}`);
