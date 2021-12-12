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

const render = () =>{
    let maincontent = helper.renderDiv();
    let form = renderForm();
    maincontent.appendChild(form);
    return form;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWlucGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XHJcblxyXG5jb25zdCByZW5kZXJGb3JtID0gKCkgPT4ge1xyXG4gICAgbGV0IGZvcm0gPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImZvcm1cIn0pO1xyXG4gICAgLy9OYW1lLEVtYWlsLFBob25lLFJlcXVlc3RGb3JcclxuICAgIGxldCBuYW1lZGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IG5hbWVMYWJlbCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcclxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xyXG4gICAgICAgICAgICBmb3I6XCJuYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50OlwiaW5wdXRcIixcclxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xyXG4gICAgICAgICAgICB0eXBlOlwidGV4dFwiLFxyXG4gICAgICAgICAgICBpZDpcIm5hbWVcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiLFxyXG4gICAgICAgICAgICBuYW1lOlwibmFtZVwiLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmFtZWRpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZWRpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgbGV0IGVtYWlsRGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IGVtYWlsTGFiZWwgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudDpcImxhYmVsXCIsXHJcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcclxuICAgICAgICAgICAgZm9yOlwiZW1haWxcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcclxuICAgIGxldCBlbWFpbElucHV0ID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6XCJpbnB1dFwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBpZDpcImVtYWlsXCIsXHJcbiAgICAgICAgICAgIG5hbWU6XCJlbWFpbFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkVudGVyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOlwiXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcbiAgICBsZXQgcGhvbmVEaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XHJcbiAgICBsZXQgcGhvbmVMYWJlbCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcclxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xyXG4gICAgICAgICAgICBmb3I6XCJwaG9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXJcIjtcclxuICAgIGxldCBwaG9uZUlucHV0ID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6XCJpbnB1dFwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XHJcbiAgICAgICAgICAgIHR5cGU6XCJudW1iZXJcIixcclxuICAgICAgICAgICAgbmFtZTpcInBob25lXCIsXHJcbiAgICAgICAgICAgIGlkOlwicGhvbmVcIixcclxuICAgICAgICAgICAgbWluOlwiMTExMTExMTExMVwiLFxyXG4gICAgICAgICAgICBtYXg6XCI5OTk5OTk5OTk5XCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlwiRW50ZXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXHJcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcclxuICAgICAgICAgICAgdHlwZTpcInN1Ym1pdFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIlN1Ym1pdFwiLFxyXG4gICAgICAgICAgICBpZDpcInN1Ym1pdFwiLFxyXG4gICAgICAgICAgICBuYW1lOlwic3VibWl0XCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XHJcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZWRpdik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsRGl2KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+e1xyXG4gICAgbGV0IG1haW5jb250ZW50ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IGZvcm0gPSByZW5kZXJGb3JtKCk7XHJcbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlcn07IiwiY29uc3QgcmVuZGVySW1hZ2UgPSAoc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMS9JbWFnZV9ub3RfYXZhaWxhYmxlLnBuZycsIGlkID0gJycpID0+IHtcclxuXHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcblx0aW1nLnNyYyA9IHNyYztcclxuXHRpbWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkID09PSAnJyA/ICcnIDogaWQpO1xyXG5cdHJldHVybiBpbWc7XHJcbn07XHJcbmNvbnN0IHJlbmRlckRpdiA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdLCBpZCA9ICcnKSA9PiB7XHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGRpdi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcblx0Y2xhc3NsaXN0LmZvckVhY2goYz0+IGRpdi5jbGFzc0xpc3QuYWRkKGMpKTtcclxuXHRpZihpZCAhPT0gJycpIGRpdi5pZCA9IGlkO1xyXG5cdHJldHVybiBkaXY7XHJcbn07XHJcbmNvbnN0IHJlbmRlckgxID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10pID0+IHtcclxuXHRsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdGgxLnRleHRDb250ZW50ID0gY29udGVudDtcclxuXHRpZiAoY2xhc3NsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGgxO1xyXG5cdGVsc2Uge1xyXG5cdFx0Y2xhc3NsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0aDEuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZXR1cm4gaDE7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoZWxlbWVudHMgPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcclxuXHRsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0aGVhZGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0Y2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcclxuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoYyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckxpc3QgPSAobGlzdFR5cGU9XCJcIixpdGVtcz1bXSk9PntcclxuXHRpZiAobGlzdFR5cGUgPT09IFwiXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkxpc3QgQ2Fubm90IGJlIEJsYW5rXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR0cnkge1xyXG5cdFx0bGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUeXBlKTtcclxuXHRcdGl0ZW1zLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0XHRcdGxpLnRleHRDb250ZW50ID0gaXRlbTtcclxuXHRcdFx0bGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBsaXN0O1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlck5hdk1lbnUgPSAoaXRlbXMgPSBbXSwgY2xhc3NMaXN0SXRlbSA9IFtdLCBjbGFzc0xpc3QgPSBbXSkgPT4ge1xyXG5cdGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuXHRsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0Y2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcclxuXHRcdFx0dWwuY2xhc3NMaXN0LmFkZChjKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdFx0aWYgKCdsaW5rJyBpbiBpdGVtICYmICd0ZXh0JyBpbiBpdGVtICYmICdpZCcgaW4gaXRlbSkge1xyXG5cdFx0XHRhLmhyZWYgPSBpdGVtLmxpbms7XHJcblx0XHRcdGEudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XHJcblx0XHRcdGEuaWQgPSBpdGVtLmlkO1xyXG5cdFx0XHRpZiAoY2xhc3NMaXN0SXRlbS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y2xhc3NMaXN0SXRlbS5mb3JFYWNoKChjKSA9PiB7XHJcblx0XHRcdFx0XHRhLmNsYXNzTGlzdC5hZGQoYyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hdi50ZXh0Q29udGVudCA9ICdFcnJvciAhJztcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGF0dHJpYnV0ZSBmb3IgbmF2IGJhciBpdGVtJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgcmV0dXJuIG5hdjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckVsZW1lbnQ9IChlbGVtZW50T2JqZWN0KSA9PiB7XHJcbiAgICBjb25zdCB7ZWxlbWVudCA9IFwiXCIsIGF0dHJpYnV0ZU9iamVjdD17fSB9ID0gZWxlbWVudE9iamVjdDtcclxuICAgIGlmKGVsZW1lbnQgPT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIkJsYW5rIHZhbHVlIGluIGVsZW1lbnRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0dHJpYnV0ZU9iamVjdCwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZU9iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckxpc3QsIHJlbmRlckVsZW1lbnQscmVuZGVyRGl2LCByZW5kZXJJbWFnZSwgcmVuZGVySGVhZGVyLCByZW5kZXJOYXZNZW51LCByZW5kZXJIMSB9O1xyXG4iLCJjb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xyXG5pbXBvcnQgcmVzdGF1cmFudEZyb250SW1hZ2UgZnJvbSAnLi9yZXN0dWFyYW50LWZyb250LXBhZ2UuanBnJztcclxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IG1haW5Db250ZW50RGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIERpdiBXaXRoIGltYWdlIFxyXG4gICAgbGV0IGRpdjEgPSBoZWxwZXIucmVuZGVyRGl2KCk7XHJcbiAgICBsZXQgaW1nMSA9IGhlbHBlci5yZW5kZXJJbWFnZShyZXN0YXVyYW50RnJvbnRJbWFnZSk7XHJcbiAgICBkaXYxLmFwcGVuZENoaWxkKGltZzEpO1xyXG4gICAgLy8gQWJvdXQgVXMgRGl2XHJcbiAgICBsZXQgZGl2MiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcclxuICAgIGxldCBhYm91dEgyID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJoMlwifSk7XHJcbiAgICBhYm91dEgyLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xyXG4gICAgbGV0IGFib3V0UCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwicFwiLGF0dHJpYnV0ZU9iamVjdDp7fX0pO1xyXG4gICAgYWJvdXRQLnRleHRDb250ZW50ID0gXCJPdXIgcmVzdGF1cmFudCBzZXJ2ZXMgYWxsIGtpbmRzIG9mIFNvdXRoIEluZGlhbiBmb29kLCBhIHNwZWNpYWxpdHkgaW4gSW5kaWFuIGN1aXNpbmUgcmFyZWx5IGZvdW5kIGFyb3VuZCB0aGVzZSBwYXJ0cy4gU291dGggSW5kaWFuIERpc2hlcyBoYXZlIGEga25vd24gcmVwdXRhdGlvbiBmb3IgYmVpbmcgZGVsaWNpb3VzLCBlYXNpbHkgZGlnZXN0YWJsZSBhbmQgYmVpbmcgaGVhbHRoaWVyIGhhdmluZyBnbHV0ZW4gZnJlZSBvcHRpb25zIHVubGlrZSB0cmFkaXRpb25hbCBOb3J0aCBJbmRpYW4gY3Vpc2luZSBzZXJ2ZWQgYXJvdW5kIG1vc3QgcGFydHMuIFdlIGFyZSBsb2NhdGVkIGluIHNvbWUgcmFuZG9tIGxvY2F0aW9uIGF0IHNvbWUgcmFuZG9tIGNpdHkuXCJcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoYWJvdXRIMik7XHJcbiAgICBkaXYyLmFwcGVuZENoaWxkKGFib3V0UCk7XHJcbiAgICAvLyBXZSBvZmZlciBEaXZcclxuICAgIGxldCBkaXYzID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IG9mZmVySDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgyXCJ9KTtcclxuICAgIGxldCBvZmZlclAgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcInBcIn0pO1xyXG4gICAgbGV0IG9mZmVyTGlzdCA9IGhlbHBlci5yZW5kZXJMaXN0KFwidWxcIixbXHJcbiAgICAgICAgXCJCcmVha2Zhc3QgLSBJZGxpcywgRG9zYXMsIFZhZGFzIGFuZCBtdWNoIG1vcmUgIVwiLFxyXG4gICAgICAgIFwiTHVuY2ggLSBSYXNzYW0gd2l0aCBSaWNlLCBDdXJyaWVzKFNhYXIgYW5kIEFtYmF0KSBhbmQgbW9yZSAhXCIsXHJcbiAgICAgICAgXCJEaW5uZXIgYW5kIHNwZWNpYWx0aWVzIC0gIFJhd2EgU2VhZm9vZCBhbmQgQ2hpY2tlbiBGcnkgYW5kIG11Y2ggbW9yZSAhXCJcclxuICAgIF0pO1xyXG4gICAgb2ZmZXJIMi50ZXh0Q29udGVudCA9IFwiV2UgSGF2ZVwiO1xyXG4gICAgb2ZmZXJQLnRleHRDb250ZW50ID0gXCJTb21lIG9mLCBpZiBub3QgdGhlIGJlc3QgaW4gd2hhdCBTb3V0aCBJbmRpYW4gaGFzIHRvIG9mZmVyICFcIlxyXG4gICAgb2ZmZXJQLmFwcGVuZENoaWxkKG9mZmVyTGlzdCk7XHJcbiAgICBkaXYzLmFwcGVuZENoaWxkKG9mZmVySDIpO1xyXG4gICAgZGl2My5hcHBlbmRDaGlsZChvZmZlclApO1xyXG5cclxuXHJcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjIpO1xyXG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XHJcbiAgICByZXR1cm4gbWFpbkNvbnRlbnREaXY7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyfTsiLCJjb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xyXG5pbXBvcnQgY2hldHRpbmFkQ2hpY2tlbiBmcm9tIFwiLi9jaGV0dGluYWQtY2hpY2tlbi1jdXJyeS5qcGdcIjtcclxuaW1wb3J0IGRvc2EgZnJvbSBcIi4vZG9zYS5qcGdcIjtcclxuaW1wb3J0IGlkbGkgZnJvbSBcIi4vaWRsaS12YWRhLXNhbWJhci5qcGdcIjtcclxuaW1wb3J0IGFwcGUgZnJvbSBcIi4vYXBwZS5qcGdcIjtcclxuY29uc3QgcmVuZGVyTWVudUl0ZW0gPSAoaXRlbSxpbWFnZSxjb250ZW50KSA9PiB7XHJcbiAgICBsZXQgZGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IGltID0gaGVscGVyLnJlbmRlckltYWdlKGltYWdlKTtcclxuICAgIGltLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBpbS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgIGxldCBoMyA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDNcIn0pO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgbGV0IHAgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcInBcIn0pO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+e1xyXG4gICAgbGV0IG1haW5jb250ZW50ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgLy9UaXRsZSBcclxuICAgIGxldCBtZW51SDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgyXCJ9KTtcclxuICAgIG1lbnVIMi50ZXh0Q29udGVudCA9IFwiU29tZSBvZiBvdXIgc3RhbmRvdXQgaXRlbXMgdG8gdHJ5LlwiXHJcbiAgICAvL01lbnUgSXRlbXMgLSBjb250YWluIElkZWFsbHkgMiBpbiBhIHJvdyBhbmQgd2lsbCBiZSBjZW50ZXJlZC5cclxuICAgIGxldCBkaXZNZW51ID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IG1lbnVJdGVtMSA9IHJlbmRlck1lbnVJdGVtKFwiSWRsaSBWYWRhIFNhbWJhclwiLGlkbGksXCJPdXIgU2lnbmF0dXJlIEl0ZW0hIFRoZSBjb21iaW5hdGlvbiBvZiB0aGUgdWx0cmEgc29mdCByaWNlIGNha2VzIGNhbGxlZCBpZGxpIHdpdGggdGhlIGNvbnRyYXN0aW5nIGNydW5jaCBvZiB0aGUgdmFkYSBkaXBwZWQgaW4gYSBzbGlnaHRseSBzd2VldCBhbmQgdGFuZ3kgc2FtYmFyIGFuZCBtZWxsb3cgY2h1dG5leSBpcyB0byBkaWUgZm9yIVwiKVxyXG4gICAgbGV0IG1lbnVJdGVtMiA9IHJlbmRlck1lbnVJdGVtKFwiRG9zYS9NYXNhbGEgRG9zYVwiLGRvc2EsXCJMaXN0ZWQgYXMgb25lIG9mIHRoZSB3b3JsZCdzIG1vc3QgZGVsaWNpb3VzIGZvb2RzLCBhIG1hc2FsYSBkb3NhIG5ldmVyIGZhaWxzIHRvIGltcHJlc3MhXCIpO1xyXG4gICAgbGV0IG1lbnVJdGVtMyA9IHJlbmRlck1lbnVJdGVtKFwiQ2hpY2tlbiBDaGV0dGluYWRcIixjaGV0dGluYWRDaGlja2VuLFwiRnVsbCBvZiBmbGF2b3VyIGFuZCBib2xkIG1hc2FsYXMsIHRoaXMgZGlzaCB3aWxsIGZsb29yIHlvdXIgZmFtaWx5IGFuZCBndWVzdHMuIEEgZ29yZ2VvdXMgbWVsYW5nZSBvZiBvbmlvbnMsIHRvbWF0b2VzLCBjaW5uYW1vbiBzdGlja3MsIGNsb3ZlcywgY3VtaW4sIGN1cnJ5IGxlYXZlcyBhbmQgYSByaWNoIGNvY29udXQteSBwYXN0ZS5cIik7XHJcbiAgICBsZXQgbWVudUl0ZW00ID0gcmVuZGVyTWVudUl0ZW0oXCJBcHBlXCIsYXBwZSxcIkEgdmFyaWF0aW9uIG9uIHRoZSB0cmFkaXRpb25hbCBJZGxpLCBmaWxsZWQgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMgYW5kIHBhbiBmcmllZCB0byBwZXJmZWN0aW9uLCBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHNvZnQgb24gdGhlIGluc2lkZS4gV29ydGggYSBzaG90IGZvciB0aG9zZSBoZWFsdGggZnJlYWtzIG91dCB0aGVyZSFcIik7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XHJcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtNCk7XHJcblxyXG4gICAgbWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUgyKTtcclxuICAgIG1haW5jb250ZW50LmFwcGVuZENoaWxkKGRpdk1lbnUpO1xyXG4gICAgcmV0dXJuIG1haW5jb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgIHtyZW5kZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qXHJcbkluZGV4IHBhZ2Ugb25seSBtZWFudCBmb3Igc3dpdGNoaW5nIGZ1bmN0aW9uYWxpdHlcclxuQWxsIG90aGVyIGltcG9ydHMgYXJlIGltYWdlcyBhcmUgdG8gYmUgZG9uZSBpbiB0aGUgaW5kaXZpZHVhbCBwYWdlIGZpbGVzIGZvciBlYWNoIG9mIHRoZSB0YWJzLlxyXG5GdW5jdGlvbmFsaXR5IGlzIHNwbGl0IGluIDQgcHJpbWFyeSBwYXJ0czpcclxuMS4gUGFnZSB0byBpbnRyb2R1Y2UgdGhlIGhvdGVsLlxyXG4yLiBNZW51IHBhZ2UuXHJcbjMuIFJldmlldyBhbmQgY29udGFjdCBwYWdlLlxyXG40LiBNYWluIG1lbnUgZm9yIHRhYiBzd2l0Y2hpbmcuXHJcbiovXHJcblxyXG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xyXG5jb25zdCBtYWlucGFnZSA9IHJlcXVpcmUoJy4vbWFpbnBhZ2UnKTtcclxuY29uc3QgY29udGFjdHBhZ2UgPSByZXF1aXJlKCcuL2NvbnRhY3RwYWdlJyk7XHJcbmNvbnN0IG1lbnVwYWdlID0gcmVxdWlyZSgnLi9tZW51cGFnZScpO1xyXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbi8vIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnVGVzdGluZyBwdXJwb3NlcyBvbmx5Lic7XHJcblxyXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcclxuXHRjb25zdCB0aXRsZSA9IGhlbHBlci5yZW5kZXJIMSgnSWRsaS1jaW91cyEnKTtcclxuXHRjb25zdCBuYXZiYXIgPSBoZWxwZXIucmVuZGVyTmF2TWVudShbXHJcblx0XHR7IGlkOiAnbWFpbicsIHRleHQ6ICdBYm91dCBVcycsIGxpbms6ICcjJyB9LFxyXG5cdFx0eyBpZDogJ21lbnUnLCB0ZXh0OiAnTWVudScsIGxpbms6ICcjJyB9LFxyXG5cdFx0eyBpZDogJ2NvbnRhY3QnLCB0ZXh0OiAnR2V0IEluIHRvdWNoICEnLCBsaW5rOiAnIycgfVxyXG5cdF0pO1xyXG5cdGNvbnN0IGhlYWRlciA9IGhlbHBlci5yZW5kZXJIZWFkZXIoWyB0aXRsZSwgbmF2YmFyIF0pO1xyXG5cdHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHJlbmRlck1haW5NZW51KCkpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGhlbHBlci5yZW5kZXJEaXYoXCJcIixbXSxcInBhZ2VcIikpO1xyXG5jb25zdCBwYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcclxuZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKXtcclxuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKG1haW5wYWdlLnJlbmRlcigpKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpe1xyXG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VEaXYuYXBwZW5kQ2hpbGQobWVudXBhZ2UucmVuZGVyKCkpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlKCl7XHJcbiAgICBwYWdlRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChjb250YWN0cGFnZS5yZW5kZXIoKSk7XHJcbn1cclxuLy8gZnVuY3Rpb24gZXZlbnRMaXN0bmVyXHJcbmNvbnN0IG1haW5QYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbmNvbnN0IG1lbnVQYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbmNvbnN0IGNvbnRhY3RQYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XHJcblxyXG5cclxubWFpblBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJNYWluUGFnZSk7XHJcbm1lbnVQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyTWVudVBhZ2UpO1xyXG5jb250YWN0UGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlckNvbnRhY3RQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=