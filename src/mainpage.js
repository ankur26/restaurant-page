const helper = require('./helper');
import restaurantFrontImage from './restuarant-front-page.jpg';
const render = () => {
	let maincontent = document.getElementById('page');
	maincontent.innerHTML = '';
    maincontent.classList.remove('menu');
    maincontent.classList.remove('contact');
	maincontent.classList.add('main');
	// Div With image
	let div1 = helper.renderDiv('', [ 'main-page-img' ]);
	let img1 = helper.renderImage(restaurantFrontImage);
	div1.appendChild(img1);
	// About Us Div
	let div2 = helper.renderDiv('', [ 'main-page-content' ]);
	let aboutH2 = helper.renderElement({ element: 'h2' });
	aboutH2.textContent = 'About us';
	let aboutP = helper.renderElement({ element: 'p', attributeObject: {} });
	aboutP.textContent =
		'Our restaurant serves all kinds of South Indian food, a speciality in Indian cuisine rarely found around these parts. South Indian Dishes have a known reputation for being delicious, easily digestable and being healthier having gluten free options unlike traditional North Indian cuisine served around most parts. We are located in some random location at some random city.';
	div2.appendChild(aboutH2);
	div2.appendChild(aboutP);
	// We offer Div
	// let div3 = helper.renderDiv();
	let offerH2 = helper.renderElement({ element: 'h2' });
	let offerP = helper.renderElement({ element: 'p' });
	let offerList = helper.renderList('ul', [
		'Breakfast - Idlis, Dosas, Vadas and much more !',
		'Lunch - Rassam with Rice, Curries(Saar and Ambat) and more !',
		'Dinner and specialties -  Rawa Seafood and Chicken Fry and much more !'
	]);
	offerH2.textContent = 'We Have';
	offerP.textContent = 'Some of, if not the best in what South Indian cuisine has to offer !';
	offerP.appendChild(offerList);
	div2.appendChild(offerH2);
	div2.appendChild(offerList);

	maincontent.appendChild(div1);
	maincontent.appendChild(div2);
	// mainContentDiv.appendChild(div3);
};

export { render };
