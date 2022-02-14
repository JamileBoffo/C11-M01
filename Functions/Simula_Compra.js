const prompt = require('prompt-sync')();
console.clear();

function pagamento(valortotal, escolha, vz){
    if (escolha == 1){
        let op1 = valortotal - (valortotal * (10/100));
        console.log(`De acordo com a forma de pagamento escolhida, você terá de pagar R$${op1.toFixed(2)}`);
        return op1
    }
    if (escolha == 2){
        let op2 = valortotal / 2
        console.log(`De acordo com a forma de pagamento escolhida, você terá de pagar R$${op2.toFixed(2)} em 2x`);
        return op2
    }
    if (escolha == 3){
        let op3 = (valortotal + (valortotal * (3/100))) / vz;
        console.log(`De acordo com a forma de pagamento escolhida, você terá de pagar R$${op3.toFixed(2)} em ${vz}x`)
        return op3
    }
}

function quantidade(valor, a, b, c){
    for(let i of valor){
        var soma = i;
        soma = soma + i
    }
   
    console.log(`O valor total de todas as compras é de R$${soma}`)
    console.log(`${a} clientes resolveram pagar o valor a vista com 10% de desconto`);
    console.log(`${b} clientes resolveram pagar parcelado em até 2x`);
    console.log(`${c} clientes resolveram pagar parcelado em mais de 3x com acrescimo de 3% a.m`)
    console.log('Sem mais clientes por hoje, tenha um bom dia')
}

let lista = [];
let cont1 = 0
let cont2 = 0
let cont3 = 0

let tg = +prompt('Digite o total gasto pelo cliente ou digite 0 para sair: ');

while(tg != 0){
    console.log();
    lista = []
    console.log(`Sua compra ficou em ${tg}, temos algumas opções para pagamento:

    1 = valor a vista com 10% de desconto;
    2 = valor da etiqueta parcelado em 2x;
    3 = parcelamento de 3 a 10x mas com 3% de juros ao mês(somente acima de R$100)`);

    console.log();

    let esc = +prompt('Digite a opção de pagamento desejada: ');
    if (esc == 1){
        cont1++
    }
    if (esc == 2){
        cont2++
    }
    if (esc == 3 && tg >= 100){
        var vezes = +prompt('Digite a quantidade de vezes de parcelamento(entre 3 e 10): ');
        cont3++
    }

    let result = pagamento(tg, esc, vezes);
    lista.push(result)

    tg = +prompt('Digite o total gasto pelo cliente ou digite 0 para sair: ');

    if (tg == 0){
        quantidade(lista, cont1, cont2, cont3)
    }   
}




















