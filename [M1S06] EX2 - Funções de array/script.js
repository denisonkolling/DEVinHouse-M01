// Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).

// Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.

// Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
// Exiba o array resultante no console, ordenado em ordem decrescente de média.

let alunos = [
	{ nome: 'Joao da Silva', nota1: 7, nota2: 9 },
	{ nome: 'Marco Antonio', nota1: 6, nota2: 7 },
	{ nome: 'Renato Borges', nota1: 5, nota2: 8 },
	{ nome: 'Pedro Maia', nota1: 8, nota2: 7 },
];

function calcularMediaAlunos(array) {
	var soma = 0;
	for (var i = 0; i < alunos.length; i++) {
		var soma = 0;
		soma += alunos[i].nota1 + alunos[i].nota2;
		media = soma / 2;
		console.log(alunos[i].nome + ' = ' + media);
	}
}

calcularMediaAlunos(alunos);