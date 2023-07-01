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


/* EXERCICIO 02 */
/* Utilizando Array de Objetos e Map */

const productsGallery = document.getElementById('cards-row');

const productsItems = [
	{ name: 'Nasoar Spray 0,9%', content: '50 ml', price: 7.99, image: './assets/produto-2.jpg'},
	{ name: 'Bifilac 250mg', content: '30 cápsulas', price: 11.99, image: './assets/produto-3.jpg' },
	{ name: 'Simeticona 125mg', content: '10 cápsulas', price: 9.99, image: './assets/produto-4.jpg' },
	{ name: 'Simfort', content: '60g', price: 14.99, image: './assets/produto-5.jpg' },
	{ name: 'Reach Essential', content: '100 m', price: 11.99, image: './assets/produto-8.jpg' },
	{ name: 'Ensure Plus Baunilha', content: '200 ml', price: 6.99, image: './assets/produto-6.jpg' },
	{ name: 'Ensure Plus Chocolate', content: '200 ml', price: 6.99, image: './assets/produto-7.jpg' },
	{ name: 'Allegra 120 mg', content: '10 comprimidos', price: 27.99, image: './assets/produto-1.jpg'},
];

const addProducts = productsItems.map((item) => {

	const productCardSize = document.createElement('div');
	productCardSize.classList.add('col-md-3');
	productCardSize.classList.add('my-2');

	const productCard = document.createElement('div');
	productCard.classList.add('card');

	const productImg = document.createElement('img');
	productImg.classList.add('card-img-top');
	productImg.href = ('#');
	productImg.src = item.image; 
	
	const productCardBody = document.createElement('div');	
	productCardBody.classList.add('card-body');

	const productName = document.createElement('h5');
	productName.classList.add('text-center');
	productName.textContent = item.name;

	const productContent = document.createElement('p');
	productContent.classList.add('text-center');
	productContent.textContent = item.content;

	const productPrice = document.createElement('h6');
	productPrice.classList.add('text-center');
	productPrice.textContent = ('R$ ' + item.price);

	const productButton = document.createElement('a');
	productButton.classList.add('d-flex')
	productButton.classList.add('align-items-center')
	productButton.classList.add('justify-content-center')
	productButton.classList.add('btn')
	productButton.classList.add('btn-outline-dark')
	productButton.classList.add('txt-center')
	productButton.textContent = ('Adicionar')

	
	productCardBody.appendChild(productName);
	productCardBody.appendChild(productContent);
	productCardBody.appendChild(productPrice);
	productCardBody.appendChild(productButton);
	productCard.appendChild(productImg);
	productCard.appendChild(productCardBody);
	productCardSize.appendChild(productCard);
	productsGallery.appendChild(productCardSize);
});




