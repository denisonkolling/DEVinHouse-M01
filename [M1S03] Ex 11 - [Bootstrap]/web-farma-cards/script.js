/* EXERCICIO 01 */
/* Utilizando Array e For Each */
const menuResults = document.getElementsByTagName('ul')[0];

const menuItems = ['Medicamentos', 'Sobre Nós', 'Fale Conosco'];

menuItems.forEach((item) => {
	const menuItem = document.createElement('li');
	menuItem.classList.add('nav-item');

	const menuItemLink = document.createElement('a');
	menuItemLink.classList.add('nav-link');
	menuItemLink.classList.add('active');
	menuItemLink.href = ('#') 
	menuItemLink.textContent = item;

	menuItem.appendChild(menuItemLink);
	menuResults.appendChild(menuItem);
});

