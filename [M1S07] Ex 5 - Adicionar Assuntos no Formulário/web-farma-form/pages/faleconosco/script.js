/* [M1S07] Ex 5 - [pagina-contato] 
Adicionar Assuntos no Formulário de Contato */

const comboSelector = document.querySelector('#combo-subject');

const comboOptions = [
	{ name: 'Selecione', cod: 0, value: 'vazio'},
	{ name: 'Elogio', cod: 1, value: 'elogio'},
	{ name: 'Dúvida', cod: 2, value: 'duvida'},
	{ name: 'Sugestão', cod: 3, value: 'sugestao'},
	{ name: 'Reclamação', cod: 4, value: 'reclamacao'}
];


const addComboOptions = () => {
	const comboOptionTemplate = comboOptions.map(({ value, name }) =>
				`<option value="${value}">${name}</option>`
		)
		.join('');
	comboSelector.innerHTML += comboOptionTemplate;
};

addComboOptions();