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
contentDiv.appendChild(helper.renderDiv("",[],"page"));
// const pageDiv = document.getElementById('page');
function renderMainPage(){
    // pageDiv.innerHTML = '';
    mainpage.render();
}
function renderMenuPage(){
    // pageDiv.innerHTML = '';
   menupage.render();
}
function renderContactPage(){
    // pageDiv.innerHTML = '';
    contactpage.render();
}
// function eventListner
const mainPageLink = document.getElementById('main');
const menuPageLink = document.getElementById('menu');
const contactPageLink = document.getElementById('contact');


mainPageLink.addEventListener('click',renderMainPage);
menuPageLink.addEventListener('click',renderMenuPage);
contactPageLink.addEventListener('click',renderContactPage);
renderMainPage();