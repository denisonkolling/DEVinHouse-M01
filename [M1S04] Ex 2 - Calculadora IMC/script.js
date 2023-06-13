const peso = prompt("Digite seu peso em Kg:");
const altura = prompt("Digite sua altura em metros:");

const imc = (Number(peso) / (Number(altura) * Number(altura)));

alert("Seu IMC é " + imc);
