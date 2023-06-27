const alunos = [
	{ nome: 'Joao da Silva', nota1: 7, nota2: 9 },
	{ nome: 'Marco Antonio', nota1: 6, nota2: 7 },
	{ nome: 'Renato Borges', nota1: 5, nota2: 7 },
	{ nome: 'Pedro Maia', nota1: 8, nota2: 7 },
];


const alunosMedia = alunos.map((aluno) => {
	return { nome: aluno.nome, media: (aluno.nota1 + aluno.nota2) / 2 };
});

console.log(alunosMedia);


const ordenaAlunos =	alunosMedia.sort((a, b) => {
			if (a.media > b.media) {
				return -1;
			} else {
				return true;
			}
		})

console.log(alunosMedia);