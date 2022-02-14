const prompt = require('prompt-sync')();
console.clear();

let vt = 100.98;
let vp = 150;
let result = vp - vt;

console.log(`Sua compra ficou no valor de R$${vt}, seu pagamento foi de R$${vp}, então seu troco é de R$${result.toFixed(2)}`);