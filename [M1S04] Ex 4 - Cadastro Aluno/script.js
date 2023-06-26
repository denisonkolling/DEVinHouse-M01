let aluno = {nome: '' , idade: 0 };

aluno.nome = prompt("Digite seu nome");
aluno.idade = prompt("Digíte sua idade");


document.body.innerText = JSON.stringify(aluno);

console.log(aluno);