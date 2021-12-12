/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });


const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

const renderForm = () => {
    let form = helper.renderElement({element:"form"});
    //Name,Email,Phone,RequestFor
    let namediv = helper.renderDiv();
    let nameLabel = helper.renderElement({
        element:"label",
        attributeObject:{
            for:"name"
        }
    });
    nameLabel.textContent = "Name";
    let nameInput = helper.renderElement({
        element:"input",
        attributeObject:{
            type:"text",
            id:"name",
            placeholder:"Enter your name here",
            name:"name",
        }
    });
    namediv.appendChild(nameLabel);
    namediv.appendChild(nameInput);
    let emailDiv = helper.renderDiv();
    let emailLabel = helper.renderElement({
        element:"label",
        attributeObject:{
            for:"email"
        }
    });
    emailLabel.textContent = "Email";
    let emailInput = helper.renderElement({
        element:"input",
        attributeObject:{
            type:"email",
            id:"email",
            name:"email",
            placeholder:"Enter email",
            required:""
        }
    });
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    let phoneDiv = helper.renderDiv();
    let phoneLabel = helper.renderElement({
        element:"label",
        attributeObject:{
            for:"phone"
        }
    });
    phoneLabel.textContent = "Phone number";
    let phoneInput = helper.renderElement({
        element:"input",
        attributeObject:{
            type:"number",
            name:"phone",
            id:"phone",
            min:"1111111111",
            max:"9999999999",
            placeholder:"Enter phone number"
        }
    });
    let submitButton = helper.renderElement({
        element:"input",
        attributeObject:{
            type:"submit",
            value:"Submit",
            id:"submit",
            name:"submit"
        }
    })
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);
    form.appendChild(namediv);
    form.appendChild(emailDiv);
    form.appendChild(phoneDiv);
    form.appendChild(submitButton);
    return form;
}

const renderReviewDiv = (review,customer) => {
    let div = helper.renderDiv();
    let reviewh3 = helper.renderElement({
        element:"h3",
    });
    reviewh3.textContent = review;
    let customerName = helper.renderElement({
        element:"p",
    });
    customerName.textContent = customer;
    div.appendChild(reviewh3);
    div.appendChild(customerName);
    return div;
}

const render = () =>{
    let maincontent = helper.renderDiv();
    let reviewDiv = helper.renderDiv();
    let review1 = renderReviewDiv("Absolutely Fantastic Food!","Random Customer 1");
    let review2 = renderReviewDiv("The Idlis are to die for !","Random Customer 2");
    let review3 = renderReviewDiv("Fantastic Ambience and food to match","Random Customer 3");
    reviewDiv.appendChild(review1);
    reviewDiv.appendChild(review2);
    reviewDiv.appendChild(review3);
    let contactFormDiv = helper.renderDiv();
    let contactFormTitle = helper.renderElement({
        element:"h2",
    });
    contactFormTitle.textContent = "Contact Us!";
    let form = renderForm();
    contactFormDiv.appendChild(contactFormTitle);
    contactFormDiv.appendChild(form);
    maincontent.appendChild(reviewDiv);
    maincontent.appendChild(contactFormDiv);
    // maincontent.appendChild(form);
    return maincontent;
}



/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderElement": () => (/* binding */ renderElement),
/* harmony export */   "renderDiv": () => (/* binding */ renderDiv),
/* harmony export */   "renderImage": () => (/* binding */ renderImage),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader),
/* harmony export */   "renderNavMenu": () => (/* binding */ renderNavMenu),
/* harmony export */   "renderH1": () => (/* binding */ renderH1)
/* harmony export */ });
const renderImage = (src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png', id = '') => {
	let img = new Image();
	img.src = src;
	img.setAttribute('id', id === '' ? '' : id);
	return img;
};
const renderDiv = (content = '', classlist = [], id = '') => {
	let div = document.createElement('div');
	div.textContent = content;
	classlist.forEach(c=> div.classList.add(c));
	if(id !== '') div.id = id;
	return div;
};
const renderH1 = (content = '', classlist = []) => {
	let h1 = document.createElement('h1');
	h1.textContent = content;
	if (classlist.length === 0) return h1;
	else {
		classlist.forEach((element) => {
			h1.classList.add(element);
		});
	}
	return h1;
};

const renderHeader = (elements = [], classList = []) => {
	let header = document.createElement('header');
	if (elements.length > 0) {
		elements.forEach((element) => {
			header.appendChild(element);
		});
	}
	if (classList.length > 0) {
		classList.forEach((c) => {
			header.classList.add(c);
		});
	}
	return header;
};

const renderList = (listType="",items=[])=>{
	if (listType === "" ){
		throw new Error("List Cannot be Blank");
		return;
	}
	try {
		let list = document.createElement(listType);
		items.forEach(item=>{
			let li = document.createElement("li");
			li.textContent = item;
			list.appendChild(li);
		});
		return list;
	} catch (error) {
		console.error(error);
	}
}

const renderNavMenu = (items = [], classListItem = [], classList = []) => {
	let nav = document.createElement('nav');
	let ul = document.createElement('ul');
	if (classList.length > 0) {
		classList.forEach((c) => {
			ul.classList.add(c);
		});
	}
	items.forEach((item) => {
        let li = document.createElement('li');
		let a = document.createElement('a');
		if ('link' in item && 'text' in item && 'id' in item) {
			a.href = item.link;
			a.textContent = item.text;
			a.id = item.id;
			if (classListItem.length > 0) {
				classListItem.forEach((c) => {
					a.classList.add(c);
				});
			}
			li.appendChild(a);
            ul.appendChild(li);
		} else {
			nav.textContent = 'Error !';
			throw new Error('Missing attribute for nav bar item');
		}
	});
    nav.appendChild(ul);
    return nav;
};

const renderElement= (elementObject) => {
    const {element = "", attributeObject={} } = elementObject;
    if(element === "") throw new Error("Blank value in element");
    try {
        let e = document.createElement(element);
        for (const key in attributeObject) {
            if (Object.hasOwnProperty.call(attributeObject, key)) {
                e.setAttribute(key,attributeObject[key]);
            }
        }
        return e;
    } catch (error) {
        console.log(error);
    }
}




/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _restuarant_front_page_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restuarant-front-page.jpg */ "./src/restuarant-front-page.jpg");
const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

const render = () => {
    let mainContentDiv = helper.renderDiv();
    
    
    // Div With image 
    let div1 = helper.renderDiv();
    let img1 = helper.renderImage(_restuarant_front_page_jpg__WEBPACK_IMPORTED_MODULE_0__);
    div1.appendChild(img1);
    // About Us Div
    let div2 = helper.renderDiv();
    let aboutH2 = helper.renderElement({element:"h2"});
    aboutH2.textContent = "About us";
    let aboutP = helper.renderElement({element:"p",attributeObject:{}});
    aboutP.textContent = "Our restaurant serves all kinds of South Indian food, a speciality in Indian cuisine rarely found around these parts. South Indian Dishes have a known reputation for being delicious, easily digestable and being healthier having gluten free options unlike traditional North Indian cuisine served around most parts. We are located in some random location at some random city."
    div2.appendChild(aboutH2);
    div2.appendChild(aboutP);
    // We offer Div
    let div3 = helper.renderDiv();
    let offerH2 = helper.renderElement({element:"h2"});
    let offerP = helper.renderElement({element:"p"});
    let offerList = helper.renderList("ul",[
        "Breakfast - Idlis, Dosas, Vadas and much more !",
        "Lunch - Rassam with Rice, Curries(Saar and Ambat) and more !",
        "Dinner and specialties -  Rawa Seafood and Chicken Fry and much more !"
    ]);
    offerH2.textContent = "We Have";
    offerP.textContent = "Some of, if not the best in what South Indian has to offer !"
    offerP.appendChild(offerList);
    div3.appendChild(offerH2);
    div3.appendChild(offerP);


    mainContentDiv.appendChild(div1);
    mainContentDiv.appendChild(div2);
    mainContentDiv.appendChild(div3);
    return mainContentDiv;
}



/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _chettinad_chicken_curry_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chettinad-chicken-curry.jpg */ "./src/chettinad-chicken-curry.jpg");
/* harmony import */ var _dosa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dosa.jpg */ "./src/dosa.jpg");
/* harmony import */ var _idli_vada_sambar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idli-vada-sambar.jpg */ "./src/idli-vada-sambar.jpg");
/* harmony import */ var _appe_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appe.jpg */ "./src/appe.jpg");
const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");




const renderMenuItem = (item,image,content) => {
    let div = helper.renderDiv();
    let im = helper.renderImage(image);
    im.style.width = "100%";
    im.style.height = "auto";
    let h3 = helper.renderElement({element:"h3"});
    h3.textContent = item;
    let p = helper.renderElement({element:"p"});
    p.textContent = content;
    div.appendChild(h3);
    div.appendChild(im);
    div.appendChild(p);
    return div;
}

const render = () =>{
    let maincontent = helper.renderDiv();
    //Title 
    let menuH2 = helper.renderElement({element:"h2"});
    menuH2.textContent = "Some of our standout items to try."
    //Menu Items - contain Ideally 2 in a row and will be centered.
    let divMenu = helper.renderDiv();
    let menuItem1 = renderMenuItem("Idli Vada Sambar",_idli_vada_sambar_jpg__WEBPACK_IMPORTED_MODULE_2__,"Our Signature Item! The combination of the ultra soft rice cakes called idli with the contrasting crunch of the vada dipped in a slightly sweet and tangy sambar and mellow chutney is to die for!")
    let menuItem2 = renderMenuItem("Dosa/Masala Dosa",_dosa_jpg__WEBPACK_IMPORTED_MODULE_1__,"Listed as one of the world's most delicious foods, a masala dosa never fails to impress!");
    let menuItem3 = renderMenuItem("Chicken Chettinad",_chettinad_chicken_curry_jpg__WEBPACK_IMPORTED_MODULE_0__,"Full of flavour and bold masalas, this dish will floor your family and guests. A gorgeous melange of onions, tomatoes, cinnamon sticks, cloves, cumin, curry leaves and a rich coconut-y paste.");
    let menuItem4 = renderMenuItem("Appe",_appe_jpg__WEBPACK_IMPORTED_MODULE_3__,"A variation on the traditional Idli, filled with chopped vegetables and pan fried to perfection, crispy on the outside and soft on the inside. Worth a shot for those health freaks out there!");
    divMenu.appendChild(menuItem1);
    divMenu.appendChild(menuItem2);
    divMenu.appendChild(menuItem3);
    divMenu.appendChild(menuItem4);

    maincontent.appendChild(menuH2);
    maincontent.appendChild(divMenu);
    return maincontent;
}



/***/ }),

/***/ "./src/appe.jpg":
/*!**********************!*\
  !*** ./src/appe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "09bf887800fdffd71323.jpg";

/***/ }),

/***/ "./src/chettinad-chicken-curry.jpg":
/*!*****************************************!*\
  !*** ./src/chettinad-chicken-curry.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "516bba3b2d101094c312.jpg";

/***/ }),

/***/ "./src/dosa.jpg":
/*!**********************!*\
  !*** ./src/dosa.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89e841d436978a9a60c7.jpg";

/***/ }),

/***/ "./src/idli-vada-sambar.jpg":
/*!**********************************!*\
  !*** ./src/idli-vada-sambar.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "282f62f58e210cc87627.jpg";

/***/ }),

/***/ "./src/restuarant-front-page.jpg":
/*!***************************************!*\
  !*** ./src/restuarant-front-page.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c611b0563a174384aa66.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
Index page only meant for switching functionality
All other imports are images are to be done in the individual page files for each of the tabs.
Functionality is split in 4 primary parts:
1. Page to introduce the hotel.
2. Menu page.
3. Review and contact page.
4. Main menu for tab switching.
*/

const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");
const mainpage = __webpack_require__(/*! ./mainpage */ "./src/mainpage.js");
const contactpage = __webpack_require__(/*! ./contactpage */ "./src/contactpage.js");
const menupage = __webpack_require__(/*! ./menupage */ "./src/menupage.js");
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
const pageDiv = document.getElementById('page');
function renderMainPage(){
    pageDiv.innerHTML = '';
    pageDiv.appendChild(mainpage.render());
}
function renderMenuPage(){
    pageDiv.innerHTML = '';
    pageDiv.appendChild(menupage.render());
}
function renderContactPage(){
    pageDiv.innerHTML = '';
    pageDiv.appendChild(contactpage.render());
}
// function eventListner
const mainPageLink = document.getElementById('main');
const menuPageLink = document.getElementById('menu');
const contactPageLink = document.getElementById('contact');


mainPageLink.addEventListener('click',renderMainPage);
menuPageLink.addEventListener('click',renderMenuPage);
contactPageLink.addEventListener('click',renderContactPage);
renderMainPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWlucGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcblxuY29uc3QgcmVuZGVyRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiZm9ybVwifSk7XG4gICAgLy9OYW1lLEVtYWlsLFBob25lLFJlcXVlc3RGb3JcbiAgICBsZXQgbmFtZWRpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgbmFtZUxhYmVsID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIGZvcjpcIm5hbWVcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbGV0IG5hbWVJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwidGV4dFwiLFxuICAgICAgICAgICAgaWQ6XCJuYW1lXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkVudGVyIHlvdXIgbmFtZSBoZXJlXCIsXG4gICAgICAgICAgICBuYW1lOlwibmFtZVwiLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbmFtZWRpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVkaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBsZXQgZW1haWxEaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IGVtYWlsTGFiZWwgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJsYWJlbFwiLFxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xuICAgICAgICAgICAgZm9yOlwiZW1haWxcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwiZW1haWxcIixcbiAgICAgICAgICAgIGlkOlwiZW1haWxcIixcbiAgICAgICAgICAgIG5hbWU6XCJlbWFpbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciBlbWFpbFwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6XCJcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgbGV0IHBob25lRGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBwaG9uZUxhYmVsID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIGZvcjpcInBob25lXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBob25lTGFiZWwudGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlclwiO1xuICAgIGxldCBwaG9uZUlucHV0ID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwiaW5wdXRcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIHR5cGU6XCJudW1iZXJcIixcbiAgICAgICAgICAgIG5hbWU6XCJwaG9uZVwiLFxuICAgICAgICAgICAgaWQ6XCJwaG9uZVwiLFxuICAgICAgICAgICAgbWluOlwiMTExMTExMTExMVwiLFxuICAgICAgICAgICAgbWF4OlwiOTk5OTk5OTk5OVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciBwaG9uZSBudW1iZXJcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwic3VibWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTpcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgaWQ6XCJzdWJtaXRcIixcbiAgICAgICAgICAgIG5hbWU6XCJzdWJtaXRcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVkaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuY29uc3QgcmVuZGVyUmV2aWV3RGl2ID0gKHJldmlldyxjdXN0b21lcikgPT4ge1xuICAgIGxldCBkaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IHJldmlld2gzID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwiaDNcIixcbiAgICB9KTtcbiAgICByZXZpZXdoMy50ZXh0Q29udGVudCA9IHJldmlldztcbiAgICBsZXQgY3VzdG9tZXJOYW1lID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwicFwiLFxuICAgIH0pO1xuICAgIGN1c3RvbWVyTmFtZS50ZXh0Q29udGVudCA9IGN1c3RvbWVyO1xuICAgIGRpdi5hcHBlbmRDaGlsZChyZXZpZXdoMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGN1c3RvbWVyTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgbGV0IG1haW5jb250ZW50ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCByZXZpZXdEaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IHJldmlldzEgPSByZW5kZXJSZXZpZXdEaXYoXCJBYnNvbHV0ZWx5IEZhbnRhc3RpYyBGb29kIVwiLFwiUmFuZG9tIEN1c3RvbWVyIDFcIik7XG4gICAgbGV0IHJldmlldzIgPSByZW5kZXJSZXZpZXdEaXYoXCJUaGUgSWRsaXMgYXJlIHRvIGRpZSBmb3IgIVwiLFwiUmFuZG9tIEN1c3RvbWVyIDJcIik7XG4gICAgbGV0IHJldmlldzMgPSByZW5kZXJSZXZpZXdEaXYoXCJGYW50YXN0aWMgQW1iaWVuY2UgYW5kIGZvb2QgdG8gbWF0Y2hcIixcIlJhbmRvbSBDdXN0b21lciAzXCIpO1xuICAgIHJldmlld0Rpdi5hcHBlbmRDaGlsZChyZXZpZXcxKTtcbiAgICByZXZpZXdEaXYuYXBwZW5kQ2hpbGQocmV2aWV3Mik7XG4gICAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKHJldmlldzMpO1xuICAgIGxldCBjb250YWN0Rm9ybURpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgY29udGFjdEZvcm1UaXRsZSA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImgyXCIsXG4gICAgfSk7XG4gICAgY29udGFjdEZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVcyFcIjtcbiAgICBsZXQgZm9ybSA9IHJlbmRlckZvcm0oKTtcbiAgICBjb250YWN0Rm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybVRpdGxlKTtcbiAgICBjb250YWN0Rm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChyZXZpZXdEaXYpO1xuICAgIG1haW5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtRGl2KTtcbiAgICAvLyBtYWluY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gbWFpbmNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7cmVuZGVyfTsiLCJjb25zdCByZW5kZXJJbWFnZSA9IChzcmMgPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QxL0ltYWdlX25vdF9hdmFpbGFibGUucG5nJywgaWQgPSAnJykgPT4ge1xuXHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cdGltZy5zcmMgPSBzcmM7XG5cdGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQgPT09ICcnID8gJycgOiBpZCk7XG5cdHJldHVybiBpbWc7XG59O1xuY29uc3QgcmVuZGVyRGl2ID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10sIGlkID0gJycpID0+IHtcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHRjbGFzc2xpc3QuZm9yRWFjaChjPT4gZGl2LmNsYXNzTGlzdC5hZGQoYykpO1xuXHRpZihpZCAhPT0gJycpIGRpdi5pZCA9IGlkO1xuXHRyZXR1cm4gZGl2O1xufTtcbmNvbnN0IHJlbmRlckgxID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10pID0+IHtcblx0bGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0aDEudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHRpZiAoY2xhc3NsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGgxO1xuXHRlbHNlIHtcblx0XHRjbGFzc2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aDEuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaDE7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoZWxlbWVudHMgPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcblx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGhlYWRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXHRpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IHJlbmRlckxpc3QgPSAobGlzdFR5cGU9XCJcIixpdGVtcz1bXSk9Pntcblx0aWYgKGxpc3RUeXBlID09PSBcIlwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTGlzdCBDYW5ub3QgYmUgQmxhbmtcIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRyeSB7XG5cdFx0bGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUeXBlKTtcblx0XHRpdGVtcy5mb3JFYWNoKGl0ZW09Pntcblx0XHRcdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGxpLnRleHRDb250ZW50ID0gaXRlbTtcblx0XHRcdGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBsaXN0O1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59XG5cbmNvbnN0IHJlbmRlck5hdk1lbnUgPSAoaXRlbXMgPSBbXSwgY2xhc3NMaXN0SXRlbSA9IFtdLCBjbGFzc0xpc3QgPSBbXSkgPT4ge1xuXHRsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cdGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdGNsYXNzTGlzdC5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHR1bC5jbGFzc0xpc3QuYWRkKGMpO1xuXHRcdH0pO1xuXHR9XG5cdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRpZiAoJ2xpbmsnIGluIGl0ZW0gJiYgJ3RleHQnIGluIGl0ZW0gJiYgJ2lkJyBpbiBpdGVtKSB7XG5cdFx0XHRhLmhyZWYgPSBpdGVtLmxpbms7XG5cdFx0XHRhLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXHRcdFx0YS5pZCA9IGl0ZW0uaWQ7XG5cdFx0XHRpZiAoY2xhc3NMaXN0SXRlbS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNsYXNzTGlzdEl0ZW0uZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0XHRcdGEuY2xhc3NMaXN0LmFkZChjKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2LnRleHRDb250ZW50ID0gJ0Vycm9yICEnO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGF0dHJpYnV0ZSBmb3IgbmF2IGJhciBpdGVtJyk7XG5cdFx0fVxuXHR9KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCByZW5kZXJFbGVtZW50PSAoZWxlbWVudE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtlbGVtZW50ID0gXCJcIiwgYXR0cmlidXRlT2JqZWN0PXt9IH0gPSBlbGVtZW50T2JqZWN0O1xuICAgIGlmKGVsZW1lbnQgPT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIkJsYW5rIHZhbHVlIGluIGVsZW1lbnRcIik7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChhdHRyaWJ1dGVPYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlT2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVuZGVyTGlzdCwgcmVuZGVyRWxlbWVudCxyZW5kZXJEaXYsIHJlbmRlckltYWdlLCByZW5kZXJIZWFkZXIsIHJlbmRlck5hdk1lbnUsIHJlbmRlckgxIH07XG4iLCJjb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuaW1wb3J0IHJlc3RhdXJhbnRGcm9udEltYWdlIGZyb20gJy4vcmVzdHVhcmFudC1mcm9udC1wYWdlLmpwZyc7XG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1haW5Db250ZW50RGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIFxuICAgIFxuICAgIC8vIERpdiBXaXRoIGltYWdlIFxuICAgIGxldCBkaXYxID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBpbWcxID0gaGVscGVyLnJlbmRlckltYWdlKHJlc3RhdXJhbnRGcm9udEltYWdlKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGltZzEpO1xuICAgIC8vIEFib3V0IFVzIERpdlxuICAgIGxldCBkaXYyID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBhYm91dEgyID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJoMlwifSk7XG4gICAgYWJvdXRIMi50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcbiAgICBsZXQgYWJvdXRQID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJwXCIsYXR0cmlidXRlT2JqZWN0Ont9fSk7XG4gICAgYWJvdXRQLnRleHRDb250ZW50ID0gXCJPdXIgcmVzdGF1cmFudCBzZXJ2ZXMgYWxsIGtpbmRzIG9mIFNvdXRoIEluZGlhbiBmb29kLCBhIHNwZWNpYWxpdHkgaW4gSW5kaWFuIGN1aXNpbmUgcmFyZWx5IGZvdW5kIGFyb3VuZCB0aGVzZSBwYXJ0cy4gU291dGggSW5kaWFuIERpc2hlcyBoYXZlIGEga25vd24gcmVwdXRhdGlvbiBmb3IgYmVpbmcgZGVsaWNpb3VzLCBlYXNpbHkgZGlnZXN0YWJsZSBhbmQgYmVpbmcgaGVhbHRoaWVyIGhhdmluZyBnbHV0ZW4gZnJlZSBvcHRpb25zIHVubGlrZSB0cmFkaXRpb25hbCBOb3J0aCBJbmRpYW4gY3Vpc2luZSBzZXJ2ZWQgYXJvdW5kIG1vc3QgcGFydHMuIFdlIGFyZSBsb2NhdGVkIGluIHNvbWUgcmFuZG9tIGxvY2F0aW9uIGF0IHNvbWUgcmFuZG9tIGNpdHkuXCJcbiAgICBkaXYyLmFwcGVuZENoaWxkKGFib3V0SDIpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoYWJvdXRQKTtcbiAgICAvLyBXZSBvZmZlciBEaXZcbiAgICBsZXQgZGl2MyA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgb2ZmZXJIMiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDJcIn0pO1xuICAgIGxldCBvZmZlclAgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcInBcIn0pO1xuICAgIGxldCBvZmZlckxpc3QgPSBoZWxwZXIucmVuZGVyTGlzdChcInVsXCIsW1xuICAgICAgICBcIkJyZWFrZmFzdCAtIElkbGlzLCBEb3NhcywgVmFkYXMgYW5kIG11Y2ggbW9yZSAhXCIsXG4gICAgICAgIFwiTHVuY2ggLSBSYXNzYW0gd2l0aCBSaWNlLCBDdXJyaWVzKFNhYXIgYW5kIEFtYmF0KSBhbmQgbW9yZSAhXCIsXG4gICAgICAgIFwiRGlubmVyIGFuZCBzcGVjaWFsdGllcyAtICBSYXdhIFNlYWZvb2QgYW5kIENoaWNrZW4gRnJ5IGFuZCBtdWNoIG1vcmUgIVwiXG4gICAgXSk7XG4gICAgb2ZmZXJIMi50ZXh0Q29udGVudCA9IFwiV2UgSGF2ZVwiO1xuICAgIG9mZmVyUC50ZXh0Q29udGVudCA9IFwiU29tZSBvZiwgaWYgbm90IHRoZSBiZXN0IGluIHdoYXQgU291dGggSW5kaWFuIGhhcyB0byBvZmZlciAhXCJcbiAgICBvZmZlclAuYXBwZW5kQ2hpbGQob2ZmZXJMaXN0KTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKG9mZmVySDIpO1xuICAgIGRpdjMuYXBwZW5kQ2hpbGQob2ZmZXJQKTtcblxuXG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgcmV0dXJuIG1haW5Db250ZW50RGl2O1xufVxuXG5leHBvcnQge3JlbmRlcn07IiwiY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbmltcG9ydCBjaGV0dGluYWRDaGlja2VuIGZyb20gXCIuL2NoZXR0aW5hZC1jaGlja2VuLWN1cnJ5LmpwZ1wiO1xuaW1wb3J0IGRvc2EgZnJvbSBcIi4vZG9zYS5qcGdcIjtcbmltcG9ydCBpZGxpIGZyb20gXCIuL2lkbGktdmFkYS1zYW1iYXIuanBnXCI7XG5pbXBvcnQgYXBwZSBmcm9tIFwiLi9hcHBlLmpwZ1wiO1xuY29uc3QgcmVuZGVyTWVudUl0ZW0gPSAoaXRlbSxpbWFnZSxjb250ZW50KSA9PiB7XG4gICAgbGV0IGRpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgaW0gPSBoZWxwZXIucmVuZGVySW1hZ2UoaW1hZ2UpO1xuICAgIGltLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaW0uc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgbGV0IGgzID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJoM1wifSk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGxldCBwID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJwXCJ9KTtcbiAgICBwLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+e1xuICAgIGxldCBtYWluY29udGVudCA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICAvL1RpdGxlIFxuICAgIGxldCBtZW51SDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgyXCJ9KTtcbiAgICBtZW51SDIudGV4dENvbnRlbnQgPSBcIlNvbWUgb2Ygb3VyIHN0YW5kb3V0IGl0ZW1zIHRvIHRyeS5cIlxuICAgIC8vTWVudSBJdGVtcyAtIGNvbnRhaW4gSWRlYWxseSAyIGluIGEgcm93IGFuZCB3aWxsIGJlIGNlbnRlcmVkLlxuICAgIGxldCBkaXZNZW51ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBtZW51SXRlbTEgPSByZW5kZXJNZW51SXRlbShcIklkbGkgVmFkYSBTYW1iYXJcIixpZGxpLFwiT3VyIFNpZ25hdHVyZSBJdGVtISBUaGUgY29tYmluYXRpb24gb2YgdGhlIHVsdHJhIHNvZnQgcmljZSBjYWtlcyBjYWxsZWQgaWRsaSB3aXRoIHRoZSBjb250cmFzdGluZyBjcnVuY2ggb2YgdGhlIHZhZGEgZGlwcGVkIGluIGEgc2xpZ2h0bHkgc3dlZXQgYW5kIHRhbmd5IHNhbWJhciBhbmQgbWVsbG93IGNodXRuZXkgaXMgdG8gZGllIGZvciFcIilcbiAgICBsZXQgbWVudUl0ZW0yID0gcmVuZGVyTWVudUl0ZW0oXCJEb3NhL01hc2FsYSBEb3NhXCIsZG9zYSxcIkxpc3RlZCBhcyBvbmUgb2YgdGhlIHdvcmxkJ3MgbW9zdCBkZWxpY2lvdXMgZm9vZHMsIGEgbWFzYWxhIGRvc2EgbmV2ZXIgZmFpbHMgdG8gaW1wcmVzcyFcIik7XG4gICAgbGV0IG1lbnVJdGVtMyA9IHJlbmRlck1lbnVJdGVtKFwiQ2hpY2tlbiBDaGV0dGluYWRcIixjaGV0dGluYWRDaGlja2VuLFwiRnVsbCBvZiBmbGF2b3VyIGFuZCBib2xkIG1hc2FsYXMsIHRoaXMgZGlzaCB3aWxsIGZsb29yIHlvdXIgZmFtaWx5IGFuZCBndWVzdHMuIEEgZ29yZ2VvdXMgbWVsYW5nZSBvZiBvbmlvbnMsIHRvbWF0b2VzLCBjaW5uYW1vbiBzdGlja3MsIGNsb3ZlcywgY3VtaW4sIGN1cnJ5IGxlYXZlcyBhbmQgYSByaWNoIGNvY29udXQteSBwYXN0ZS5cIik7XG4gICAgbGV0IG1lbnVJdGVtNCA9IHJlbmRlck1lbnVJdGVtKFwiQXBwZVwiLGFwcGUsXCJBIHZhcmlhdGlvbiBvbiB0aGUgdHJhZGl0aW9uYWwgSWRsaSwgZmlsbGVkIHdpdGggY2hvcHBlZCB2ZWdldGFibGVzIGFuZCBwYW4gZnJpZWQgdG8gcGVyZmVjdGlvbiwgY3Jpc3B5IG9uIHRoZSBvdXRzaWRlIGFuZCBzb2Z0IG9uIHRoZSBpbnNpZGUuIFdvcnRoIGEgc2hvdCBmb3IgdGhvc2UgaGVhbHRoIGZyZWFrcyBvdXQgdGhlcmUhXCIpO1xuICAgIGRpdk1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuICAgIGRpdk1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW00KTtcblxuICAgIG1haW5jb250ZW50LmFwcGVuZENoaWxkKG1lbnVIMik7XG4gICAgbWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2TWVudSk7XG4gICAgcmV0dXJuIG1haW5jb250ZW50O1xufVxuXG5leHBvcnQgIHtyZW5kZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qXG5JbmRleCBwYWdlIG9ubHkgbWVhbnQgZm9yIHN3aXRjaGluZyBmdW5jdGlvbmFsaXR5XG5BbGwgb3RoZXIgaW1wb3J0cyBhcmUgaW1hZ2VzIGFyZSB0byBiZSBkb25lIGluIHRoZSBpbmRpdmlkdWFsIHBhZ2UgZmlsZXMgZm9yIGVhY2ggb2YgdGhlIHRhYnMuXG5GdW5jdGlvbmFsaXR5IGlzIHNwbGl0IGluIDQgcHJpbWFyeSBwYXJ0czpcbjEuIFBhZ2UgdG8gaW50cm9kdWNlIHRoZSBob3RlbC5cbjIuIE1lbnUgcGFnZS5cbjMuIFJldmlldyBhbmQgY29udGFjdCBwYWdlLlxuNC4gTWFpbiBtZW51IGZvciB0YWIgc3dpdGNoaW5nLlxuKi9cblxuY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbmNvbnN0IG1haW5wYWdlID0gcmVxdWlyZSgnLi9tYWlucGFnZScpO1xuY29uc3QgY29udGFjdHBhZ2UgPSByZXF1aXJlKCcuL2NvbnRhY3RwYWdlJyk7XG5jb25zdCBtZW51cGFnZSA9IHJlcXVpcmUoJy4vbWVudXBhZ2UnKTtcbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbi8vIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnVGVzdGluZyBwdXJwb3NlcyBvbmx5Lic7XG5cbmNvbnN0IHJlbmRlck1haW5NZW51ID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGhlbHBlci5yZW5kZXJIMSgnSWRsaS1jaW91cyEnKTtcblx0Y29uc3QgbmF2YmFyID0gaGVscGVyLnJlbmRlck5hdk1lbnUoW1xuXHRcdHsgaWQ6ICdtYWluJywgdGV4dDogJ0Fib3V0IFVzJywgbGluazogJyMnIH0sXG5cdFx0eyBpZDogJ21lbnUnLCB0ZXh0OiAnTWVudScsIGxpbms6ICcjJyB9LFxuXHRcdHsgaWQ6ICdjb250YWN0JywgdGV4dDogJ0dldCBJbiB0b3VjaCAhJywgbGluazogJyMnIH1cblx0XSk7XG5cdGNvbnN0IGhlYWRlciA9IGhlbHBlci5yZW5kZXJIZWFkZXIoWyB0aXRsZSwgbmF2YmFyIF0pO1xuXHRyZXR1cm4gaGVhZGVyO1xufTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChyZW5kZXJNYWluTWVudSgpKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVscGVyLnJlbmRlckRpdihcIlwiLFtdLFwicGFnZVwiKSk7XG5jb25zdCBwYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbmZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKCl7XG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKG1haW5wYWdlLnJlbmRlcigpKTtcbn1cbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCl7XG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKG1lbnVwYWdlLnJlbmRlcigpKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlKCl7XG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RwYWdlLnJlbmRlcigpKTtcbn1cbi8vIGZ1bmN0aW9uIGV2ZW50TGlzdG5lclxuY29uc3QgbWFpblBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbmNvbnN0IG1lbnVQYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5jb25zdCBjb250YWN0UGFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuXG5cbm1haW5QYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyTWFpblBhZ2UpO1xubWVudVBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJNZW51UGFnZSk7XG5jb250YWN0UGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlckNvbnRhY3RQYWdlKTtcbnJlbmRlck1haW5QYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9