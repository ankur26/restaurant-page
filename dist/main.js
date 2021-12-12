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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cbmNvbnN0IHJlbmRlckZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGZvcm0gPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImZvcm1cIn0pO1xuICAgIC8vTmFtZSxFbWFpbCxQaG9uZSxSZXF1ZXN0Rm9yXG4gICAgbGV0IG5hbWVkaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IG5hbWVMYWJlbCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImxhYmVsXCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICBmb3I6XCJuYW1lXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIGxldCBuYW1lSW5wdXQgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJpbnB1dFwiLFxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xuICAgICAgICAgICAgdHlwZTpcInRleHRcIixcbiAgICAgICAgICAgIGlkOlwibmFtZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiLFxuICAgICAgICAgICAgbmFtZTpcIm5hbWVcIixcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG5hbWVkaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lZGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgbGV0IGVtYWlsRGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBlbWFpbExhYmVsID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIGZvcjpcImVtYWlsXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsXCI7XG4gICAgbGV0IGVtYWlsSW5wdXQgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJpbnB1dFwiLFxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xuICAgICAgICAgICAgdHlwZTpcImVtYWlsXCIsXG4gICAgICAgICAgICBpZDpcImVtYWlsXCIsXG4gICAgICAgICAgICBuYW1lOlwiZW1haWxcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRW50ZXIgZW1haWxcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOlwiXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGxldCBwaG9uZURpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgcGhvbmVMYWJlbCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImxhYmVsXCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICBmb3I6XCJwaG9uZVwiXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXJcIjtcbiAgICBsZXQgcGhvbmVJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwibnVtYmVyXCIsXG4gICAgICAgICAgICBuYW1lOlwicGhvbmVcIixcbiAgICAgICAgICAgIGlkOlwicGhvbmVcIixcbiAgICAgICAgICAgIG1pbjpcIjExMTExMTExMTFcIixcbiAgICAgICAgICAgIG1heDpcIjk5OTk5OTk5OTlcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRW50ZXIgcGhvbmUgbnVtYmVyXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBzdWJtaXRCdXR0b24gPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJpbnB1dFwiLFxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xuICAgICAgICAgICAgdHlwZTpcInN1Ym1pdFwiLFxuICAgICAgICAgICAgdmFsdWU6XCJTdWJtaXRcIixcbiAgICAgICAgICAgIGlkOlwic3VibWl0XCIsXG4gICAgICAgICAgICBuYW1lOlwic3VibWl0XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHBob25lRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmNvbnN0IHJlbmRlclJldmlld0RpdiA9IChyZXZpZXcsY3VzdG9tZXIpID0+IHtcbiAgICBsZXQgZGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCByZXZpZXdoMyA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImgzXCIsXG4gICAgfSk7XG4gICAgcmV2aWV3aDMudGV4dENvbnRlbnQgPSByZXZpZXc7XG4gICAgbGV0IGN1c3RvbWVyTmFtZSA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcInBcIixcbiAgICB9KTtcbiAgICBjdXN0b21lck5hbWUudGV4dENvbnRlbnQgPSBjdXN0b21lcjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmV2aWV3aDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjdXN0b21lck5hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+e1xuICAgIGxldCBtYWluY29udGVudCA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgcmV2aWV3RGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCByZXZpZXcxID0gcmVuZGVyUmV2aWV3RGl2KFwiQWJzb2x1dGVseSBGYW50YXN0aWMgRm9vZCFcIixcIlJhbmRvbSBDdXN0b21lciAxXCIpO1xuICAgIGxldCByZXZpZXcyID0gcmVuZGVyUmV2aWV3RGl2KFwiVGhlIElkbGlzIGFyZSB0byBkaWUgZm9yICFcIixcIlJhbmRvbSBDdXN0b21lciAyXCIpO1xuICAgIGxldCByZXZpZXczID0gcmVuZGVyUmV2aWV3RGl2KFwiRmFudGFzdGljIEFtYmllbmNlIGFuZCBmb29kIHRvIG1hdGNoXCIsXCJSYW5kb20gQ3VzdG9tZXIgM1wiKTtcbiAgICByZXZpZXdEaXYuYXBwZW5kQ2hpbGQocmV2aWV3MSk7XG4gICAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKHJldmlldzIpO1xuICAgIHJldmlld0Rpdi5hcHBlbmRDaGlsZChyZXZpZXczKTtcbiAgICBsZXQgY29udGFjdEZvcm1EaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IGNvbnRhY3RGb3JtVGl0bGUgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJoMlwiLFxuICAgIH0pO1xuICAgIGNvbnRhY3RGb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMhXCI7XG4gICAgbGV0IGZvcm0gPSByZW5kZXJGb3JtKCk7XG4gICAgY29udGFjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1UaXRsZSk7XG4gICAgY29udGFjdEZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3RGl2KTtcbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9ybURpdik7XG4gICAgLy8gbWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIG1haW5jb250ZW50O1xufVxuXG5leHBvcnQge3JlbmRlcn07IiwiY29uc3QgcmVuZGVySW1hZ2UgPSAoc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMS9JbWFnZV9ub3RfYXZhaWxhYmxlLnBuZycsIGlkID0gJycpID0+IHtcblx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRpbWcuc3JjID0gc3JjO1xuXHRpbWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkID09PSAnJyA/ICcnIDogaWQpO1xuXHRyZXR1cm4gaW1nO1xufTtcbmNvbnN0IHJlbmRlckRpdiA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdLCBpZCA9ICcnKSA9PiB7XG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LnRleHRDb250ZW50ID0gY29udGVudDtcblx0Y2xhc3NsaXN0LmZvckVhY2goYz0+IGRpdi5jbGFzc0xpc3QuYWRkKGMpKTtcblx0aWYoaWQgIT09ICcnKSBkaXYuaWQgPSBpZDtcblx0cmV0dXJuIGRpdjtcbn07XG5jb25zdCByZW5kZXJIMSA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGgxLnRleHRDb250ZW50ID0gY29udGVudDtcblx0aWYgKGNsYXNzbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBoMTtcblx0ZWxzZSB7XG5cdFx0Y2xhc3NsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGgxLmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGgxO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKGVsZW1lbnRzID0gW10sIGNsYXNzTGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0Y2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKGMpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCByZW5kZXJMaXN0ID0gKGxpc3RUeXBlPVwiXCIsaXRlbXM9W10pPT57XG5cdGlmIChsaXN0VHlwZSA9PT0gXCJcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxpc3QgQ2Fubm90IGJlIEJsYW5rXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0cnkge1xuXHRcdGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VHlwZSk7XG5cdFx0aXRlbXMuZm9yRWFjaChpdGVtPT57XG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IGl0ZW07XG5cdFx0XHRsaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbGlzdDtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufVxuXG5jb25zdCByZW5kZXJOYXZNZW51ID0gKGl0ZW1zID0gW10sIGNsYXNzTGlzdEl0ZW0gPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcblx0bGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXHRsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0dWwuY2xhc3NMaXN0LmFkZChjKTtcblx0XHR9KTtcblx0fVxuXHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0aWYgKCdsaW5rJyBpbiBpdGVtICYmICd0ZXh0JyBpbiBpdGVtICYmICdpZCcgaW4gaXRlbSkge1xuXHRcdFx0YS5ocmVmID0gaXRlbS5saW5rO1xuXHRcdFx0YS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblx0XHRcdGEuaWQgPSBpdGVtLmlkO1xuXHRcdFx0aWYgKGNsYXNzTGlzdEl0ZW0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjbGFzc0xpc3RJdGVtLmZvckVhY2goKGMpID0+IHtcblx0XHRcdFx0XHRhLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdi50ZXh0Q29udGVudCA9ICdFcnJvciAhJztcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhdHRyaWJ1dGUgZm9yIG5hdiBiYXIgaXRlbScpO1xuXHRcdH1cblx0fSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgcmVuZGVyRWxlbWVudD0gKGVsZW1lbnRPYmplY3QpID0+IHtcbiAgICBjb25zdCB7ZWxlbWVudCA9IFwiXCIsIGF0dHJpYnV0ZU9iamVjdD17fSB9ID0gZWxlbWVudE9iamVjdDtcbiAgICBpZihlbGVtZW50ID09PSBcIlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJCbGFuayB2YWx1ZSBpbiBlbGVtZW50XCIpO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYXR0cmlidXRlT2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZU9iamVjdFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbmRlckxpc3QsIHJlbmRlckVsZW1lbnQscmVuZGVyRGl2LCByZW5kZXJJbWFnZSwgcmVuZGVySGVhZGVyLCByZW5kZXJOYXZNZW51LCByZW5kZXJIMSB9O1xuIiwiY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbmltcG9ydCByZXN0YXVyYW50RnJvbnRJbWFnZSBmcm9tICcuL3Jlc3R1YXJhbnQtZnJvbnQtcGFnZS5qcGcnO1xuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGxldCBtYWluQ29udGVudERpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBcbiAgICBcbiAgICAvLyBEaXYgV2l0aCBpbWFnZSBcbiAgICBsZXQgZGl2MSA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgaW1nMSA9IGhlbHBlci5yZW5kZXJJbWFnZShyZXN0YXVyYW50RnJvbnRJbWFnZSk7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICAvLyBBYm91dCBVcyBEaXZcbiAgICBsZXQgZGl2MiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgYWJvdXRIMiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDJcIn0pO1xuICAgIGFib3V0SDIudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XG4gICAgbGV0IGFib3V0UCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwicFwiLGF0dHJpYnV0ZU9iamVjdDp7fX0pO1xuICAgIGFib3V0UC50ZXh0Q29udGVudCA9IFwiT3VyIHJlc3RhdXJhbnQgc2VydmVzIGFsbCBraW5kcyBvZiBTb3V0aCBJbmRpYW4gZm9vZCwgYSBzcGVjaWFsaXR5IGluIEluZGlhbiBjdWlzaW5lIHJhcmVseSBmb3VuZCBhcm91bmQgdGhlc2UgcGFydHMuIFNvdXRoIEluZGlhbiBEaXNoZXMgaGF2ZSBhIGtub3duIHJlcHV0YXRpb24gZm9yIGJlaW5nIGRlbGljaW91cywgZWFzaWx5IGRpZ2VzdGFibGUgYW5kIGJlaW5nIGhlYWx0aGllciBoYXZpbmcgZ2x1dGVuIGZyZWUgb3B0aW9ucyB1bmxpa2UgdHJhZGl0aW9uYWwgTm9ydGggSW5kaWFuIGN1aXNpbmUgc2VydmVkIGFyb3VuZCBtb3N0IHBhcnRzLiBXZSBhcmUgbG9jYXRlZCBpbiBzb21lIHJhbmRvbSBsb2NhdGlvbiBhdCBzb21lIHJhbmRvbSBjaXR5LlwiXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChhYm91dEgyKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGFib3V0UCk7XG4gICAgLy8gV2Ugb2ZmZXIgRGl2XG4gICAgbGV0IGRpdjMgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IG9mZmVySDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgyXCJ9KTtcbiAgICBsZXQgb2ZmZXJQID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJwXCJ9KTtcbiAgICBsZXQgb2ZmZXJMaXN0ID0gaGVscGVyLnJlbmRlckxpc3QoXCJ1bFwiLFtcbiAgICAgICAgXCJCcmVha2Zhc3QgLSBJZGxpcywgRG9zYXMsIFZhZGFzIGFuZCBtdWNoIG1vcmUgIVwiLFxuICAgICAgICBcIkx1bmNoIC0gUmFzc2FtIHdpdGggUmljZSwgQ3VycmllcyhTYWFyIGFuZCBBbWJhdCkgYW5kIG1vcmUgIVwiLFxuICAgICAgICBcIkRpbm5lciBhbmQgc3BlY2lhbHRpZXMgLSAgUmF3YSBTZWFmb29kIGFuZCBDaGlja2VuIEZyeSBhbmQgbXVjaCBtb3JlICFcIlxuICAgIF0pO1xuICAgIG9mZmVySDIudGV4dENvbnRlbnQgPSBcIldlIEhhdmVcIjtcbiAgICBvZmZlclAudGV4dENvbnRlbnQgPSBcIlNvbWUgb2YsIGlmIG5vdCB0aGUgYmVzdCBpbiB3aGF0IFNvdXRoIEluZGlhbiBoYXMgdG8gb2ZmZXIgIVwiXG4gICAgb2ZmZXJQLmFwcGVuZENoaWxkKG9mZmVyTGlzdCk7XG4gICAgZGl2My5hcHBlbmRDaGlsZChvZmZlckgyKTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKG9mZmVyUCk7XG5cblxuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjMpO1xuICAgIHJldHVybiBtYWluQ29udGVudERpdjtcbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsImNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5pbXBvcnQgY2hldHRpbmFkQ2hpY2tlbiBmcm9tIFwiLi9jaGV0dGluYWQtY2hpY2tlbi1jdXJyeS5qcGdcIjtcbmltcG9ydCBkb3NhIGZyb20gXCIuL2Rvc2EuanBnXCI7XG5pbXBvcnQgaWRsaSBmcm9tIFwiLi9pZGxpLXZhZGEtc2FtYmFyLmpwZ1wiO1xuaW1wb3J0IGFwcGUgZnJvbSBcIi4vYXBwZS5qcGdcIjtcbmNvbnN0IHJlbmRlck1lbnVJdGVtID0gKGl0ZW0saW1hZ2UsY29udGVudCkgPT4ge1xuICAgIGxldCBkaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IGltID0gaGVscGVyLnJlbmRlckltYWdlKGltYWdlKTtcbiAgICBpbS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGltLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIGxldCBoMyA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDNcIn0pO1xuICAgIGgzLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBsZXQgcCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwicFwifSk7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW0pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5jb25zdCByZW5kZXIgPSAoKSA9PntcbiAgICBsZXQgbWFpbmNvbnRlbnQgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgLy9UaXRsZSBcbiAgICBsZXQgbWVudUgyID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJoMlwifSk7XG4gICAgbWVudUgyLnRleHRDb250ZW50ID0gXCJTb21lIG9mIG91ciBzdGFuZG91dCBpdGVtcyB0byB0cnkuXCJcbiAgICAvL01lbnUgSXRlbXMgLSBjb250YWluIElkZWFsbHkgMiBpbiBhIHJvdyBhbmQgd2lsbCBiZSBjZW50ZXJlZC5cbiAgICBsZXQgZGl2TWVudSA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgbWVudUl0ZW0xID0gcmVuZGVyTWVudUl0ZW0oXCJJZGxpIFZhZGEgU2FtYmFyXCIsaWRsaSxcIk91ciBTaWduYXR1cmUgSXRlbSEgVGhlIGNvbWJpbmF0aW9uIG9mIHRoZSB1bHRyYSBzb2Z0IHJpY2UgY2FrZXMgY2FsbGVkIGlkbGkgd2l0aCB0aGUgY29udHJhc3RpbmcgY3J1bmNoIG9mIHRoZSB2YWRhIGRpcHBlZCBpbiBhIHNsaWdodGx5IHN3ZWV0IGFuZCB0YW5neSBzYW1iYXIgYW5kIG1lbGxvdyBjaHV0bmV5IGlzIHRvIGRpZSBmb3IhXCIpXG4gICAgbGV0IG1lbnVJdGVtMiA9IHJlbmRlck1lbnVJdGVtKFwiRG9zYS9NYXNhbGEgRG9zYVwiLGRvc2EsXCJMaXN0ZWQgYXMgb25lIG9mIHRoZSB3b3JsZCdzIG1vc3QgZGVsaWNpb3VzIGZvb2RzLCBhIG1hc2FsYSBkb3NhIG5ldmVyIGZhaWxzIHRvIGltcHJlc3MhXCIpO1xuICAgIGxldCBtZW51SXRlbTMgPSByZW5kZXJNZW51SXRlbShcIkNoaWNrZW4gQ2hldHRpbmFkXCIsY2hldHRpbmFkQ2hpY2tlbixcIkZ1bGwgb2YgZmxhdm91ciBhbmQgYm9sZCBtYXNhbGFzLCB0aGlzIGRpc2ggd2lsbCBmbG9vciB5b3VyIGZhbWlseSBhbmQgZ3Vlc3RzLiBBIGdvcmdlb3VzIG1lbGFuZ2Ugb2Ygb25pb25zLCB0b21hdG9lcywgY2lubmFtb24gc3RpY2tzLCBjbG92ZXMsIGN1bWluLCBjdXJyeSBsZWF2ZXMgYW5kIGEgcmljaCBjb2NvbnV0LXkgcGFzdGUuXCIpO1xuICAgIGxldCBtZW51SXRlbTQgPSByZW5kZXJNZW51SXRlbShcIkFwcGVcIixhcHBlLFwiQSB2YXJpYXRpb24gb24gdGhlIHRyYWRpdGlvbmFsIElkbGksIGZpbGxlZCB3aXRoIGNob3BwZWQgdmVnZXRhYmxlcyBhbmQgcGFuIGZyaWVkIHRvIHBlcmZlY3Rpb24sIGNyaXNweSBvbiB0aGUgb3V0c2lkZSBhbmQgc29mdCBvbiB0aGUgaW5zaWRlLiBXb3J0aCBhIHNob3QgZm9yIHRob3NlIGhlYWx0aCBmcmVha3Mgb3V0IHRoZXJlIVwiKTtcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChtZW51SXRlbTIpO1xuICAgIGRpdk1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtNCk7XG5cbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChtZW51SDIpO1xuICAgIG1haW5jb250ZW50LmFwcGVuZENoaWxkKGRpdk1lbnUpO1xuICAgIHJldHVybiBtYWluY29udGVudDtcbn1cblxuZXhwb3J0ICB7cmVuZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKlxuSW5kZXggcGFnZSBvbmx5IG1lYW50IGZvciBzd2l0Y2hpbmcgZnVuY3Rpb25hbGl0eVxuQWxsIG90aGVyIGltcG9ydHMgYXJlIGltYWdlcyBhcmUgdG8gYmUgZG9uZSBpbiB0aGUgaW5kaXZpZHVhbCBwYWdlIGZpbGVzIGZvciBlYWNoIG9mIHRoZSB0YWJzLlxuRnVuY3Rpb25hbGl0eSBpcyBzcGxpdCBpbiA0IHByaW1hcnkgcGFydHM6XG4xLiBQYWdlIHRvIGludHJvZHVjZSB0aGUgaG90ZWwuXG4yLiBNZW51IHBhZ2UuXG4zLiBSZXZpZXcgYW5kIGNvbnRhY3QgcGFnZS5cbjQuIE1haW4gbWVudSBmb3IgdGFiIHN3aXRjaGluZy5cbiovXG5cbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5jb25zdCBtYWlucGFnZSA9IHJlcXVpcmUoJy4vbWFpbnBhZ2UnKTtcbmNvbnN0IGNvbnRhY3RwYWdlID0gcmVxdWlyZSgnLi9jb250YWN0cGFnZScpO1xuY29uc3QgbWVudXBhZ2UgPSByZXF1aXJlKCcuL21lbnVwYWdlJyk7XG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4vLyBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJ1Rlc3RpbmcgcHVycG9zZXMgb25seS4nO1xuXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBoZWxwZXIucmVuZGVySDEoJ0lkbGktY2lvdXMhJyk7XG5cdGNvbnN0IG5hdmJhciA9IGhlbHBlci5yZW5kZXJOYXZNZW51KFtcblx0XHR7IGlkOiAnbWFpbicsIHRleHQ6ICdBYm91dCBVcycsIGxpbms6ICcjJyB9LFxuXHRcdHsgaWQ6ICdtZW51JywgdGV4dDogJ01lbnUnLCBsaW5rOiAnIycgfSxcblx0XHR7IGlkOiAnY29udGFjdCcsIHRleHQ6ICdHZXQgSW4gdG91Y2ggIScsIGxpbms6ICcjJyB9XG5cdF0pO1xuXHRjb25zdCBoZWFkZXIgPSBoZWxwZXIucmVuZGVySGVhZGVyKFsgdGl0bGUsIG5hdmJhciBdKTtcblx0cmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVuZGVyTWFpbk1lbnUoKSk7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGhlbHBlci5yZW5kZXJEaXYoXCJcIixbXSxcInBhZ2VcIikpO1xuY29uc3QgcGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChtYWlucGFnZS5yZW5kZXIoKSk7XG59XG5mdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51cGFnZS5yZW5kZXIoKSk7XG59XG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChjb250YWN0cGFnZS5yZW5kZXIoKSk7XG59XG4vLyBmdW5jdGlvbiBldmVudExpc3RuZXJcbmNvbnN0IG1haW5QYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCBtZW51UGFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdFBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuXG5tYWluUGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1haW5QYWdlKTtcbm1lbnVQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyTWVudVBhZ2UpO1xuY29udGFjdFBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJDb250YWN0UGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9