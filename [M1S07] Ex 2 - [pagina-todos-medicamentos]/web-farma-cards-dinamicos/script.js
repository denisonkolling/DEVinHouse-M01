/* EXERCICIO 01 -  Adicionar dinamicamente opções menu */
/* Utilizando Array e For Each */
const menuResults = document.getElementsByTagName('ul')[0];
const menuItems = ['Medicamentos', 'Sobre Nós', 'Fale Conosco'];

menuItems.forEach((item) => {
	const menuItem = document.createElement('li');
	menuItem.classList.add('nav-item');

	const menuItemLink = document.createElement('a');
	menuItemLink.classList.add('nav-link');
	menuItemLink.classList.add('active');
	menuItemLink.href = '#';
	menuItemLink.textContent = item;

	menuItem.appendChild(menuItemLink);
	menuResults.appendChild(menuItem);
});

/* EXERCICIO 02 - Adicionar lista de medicamentos dinamicamente */
/* Utilizando Array de Objetos e Map */
const cardsContainer = document.querySelector('#products-grid');
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


const addProductGallery = () => { 
	
	const productsTemplate = productsItems.map(({image, name, content, price}) =>
	`<div class="col-md-3 my-2 d-flex align-items-stretch">
			<div class="card">
				<img class="card-img-top" src="${image}" alt="..." />
					<div class="card-body text-center">
						<h6>${name}</h6>
						<p>${content}</p>
						<h6>R$ ${price}</h6>
						<button class="btn btn-outline-dark txt-center">Adicionar</button>
					</div>
				</div>
			</div>`).join('');

	cardsContainer.innerHTML += productsTemplate;

}

addProductGallery();

