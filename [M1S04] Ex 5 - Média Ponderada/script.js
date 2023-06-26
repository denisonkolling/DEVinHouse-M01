
let nota1 = prompt("Digite a nota 1");
let peso1 = prompt("Digite o peso da nota 1");
let nota2 = prompt("Digíte a nota 2");
let peso2 = prompt("Digite o peso da nota 2");
let nota3 = prompt("Digíte a nota 2");
let peso3 = prompt("Digite o peso da nota 3");


let notaPonderada = (((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/(peso1+peso2+peso3))

document.body.innerText = notaPonderada;

console.log(notaPonderada);