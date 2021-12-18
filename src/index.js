/*
Index page only meant for switching functionality
All other imports are images are to be done in the individual page files for each of the tabs.
Functionality is split in 4 primary parts:
1. Page to introduce the hotel.
2. Menu page.
3. Review and contact page.
4. Main menu for tab switching.
*/
import './style.css';

const helper = require('./helper');
const mainpage = require('./mainpage');
const contactpage = require('./contactpage');
const menupage = require('./menupage');
let contentDiv = document.getElementById('content');
// contentDiv.textContent = 'Testing purposes only.';

const renderMainMenu = () => {
	const title = helper.renderH1('Idli-cious!');
	const navbar = helper.renderNavMenu([
		{ id: 'main', text: 'About Us', link: '#' },
		{ id: 'menu', text: 'Menu', link: '#' },
		{ id: 'contact', text: 'Get In touch !', link: '#' }
	]);
	const header = helper.renderHeader([ title, navbar ]);
	return header;
};

contentDiv.appendChild(renderMainMenu());

const aboutNavLink = document.getElementById('main');
const menuNavLink = document.getElementById('menu');
const contactNavLink = document.getElementById('contact');
const toggle=(a)=>{
	aboutNavLink.classList.remove('selected');
	menuNavLink.classList.remove('selected');
	contactNavLink.classList.remove('selected');
	console.log(a);
	switch (a) {
		case 1:
			aboutNavLink.classList.add('selected');
			break;
		case 2:
			menuNavLink.classList.add('selected');
			break;
		case 3:
			contactNavLink.classList.add('selected');
		default:
			console.log("error");
			break;
	}
}

// console.log({aboutNavLink,menuNavLink,contactNavLink});
contentDiv.appendChild(helper.renderDiv('', [], 'page'));
// const pageDiv = document.getElementById('page');
function renderMainPage() {
	// pageDiv.innerHTML = '';
	toggle(1);
	mainpage.render();
}
function renderMenuPage() {
	// pageDiv.innerHTML = '';
	toggle(2);
	menupage.render();
}
function renderContactPage() {
	// pageDiv.innerHTML = '';
	toggle(3);
	contactpage.render();
}
// function eventListner
const mainPageLink = document.getElementById('main');
const menuPageLink = document.getElementById('menu');
const contactPageLink = document.getElementById('contact');

mainPageLink.addEventListener('click', renderMainPage);
menuPageLink.addEventListener('click', renderMenuPage);
contactPageLink.addEventListener('click', renderContactPage);
renderMainPage();
