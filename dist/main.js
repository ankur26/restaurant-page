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

const render = () =>{
    return helper.renderDiv('You are in the contact page using the contact page JS');
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
	div.id = id !== '' ? id : '';
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
const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

const render = () =>{
    return helper.renderDiv('You are accesing the menu page using the menu page file');
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+e1xyXG4gICAgcmV0dXJuIGhlbHBlci5yZW5kZXJEaXYoJ1lvdSBhcmUgaW4gdGhlIGNvbnRhY3QgcGFnZSB1c2luZyB0aGUgY29udGFjdCBwYWdlIEpTJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyfTsiLCJjb25zdCByZW5kZXJJbWFnZSA9IChzcmMgPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QxL0ltYWdlX25vdF9hdmFpbGFibGUucG5nJywgaWQgPSAnJykgPT4ge1xyXG5cdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbWcuc3JjID0gc3JjO1xyXG5cdGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQgPT09ICcnID8gJycgOiBpZCk7XHJcblx0cmV0dXJuIGltZztcclxufTtcclxuY29uc3QgcmVuZGVyRGl2ID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10sIGlkID0gJycpID0+IHtcclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZGl2LnRleHRDb250ZW50ID0gY29udGVudDtcclxuXHRjbGFzc2xpc3QuZm9yRWFjaChjPT4gZGl2LmNsYXNzTGlzdC5hZGQoYykpO1xyXG5cdGRpdi5pZCA9IGlkICE9PSAnJyA/IGlkIDogJyc7XHJcblx0cmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgcmVuZGVySDEgPSAoY29udGVudCA9ICcnLCBjbGFzc2xpc3QgPSBbXSkgPT4ge1xyXG5cdGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0aDEudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG5cdGlmIChjbGFzc2xpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gaDE7XHJcblx0ZWxzZSB7XHJcblx0XHRjbGFzc2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRoMS5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJldHVybiBoMTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckhlYWRlciA9IChlbGVtZW50cyA9IFtdLCBjbGFzc0xpc3QgPSBbXSkgPT4ge1xyXG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChjKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyTGlzdCA9IChsaXN0VHlwZT1cIlwiLGl0ZW1zPVtdKT0+e1xyXG5cdGlmIChsaXN0VHlwZSA9PT0gXCJcIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTGlzdCBDYW5ub3QgYmUgQmxhbmtcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHRyeSB7XHJcblx0XHRsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGlzdFR5cGUpO1xyXG5cdFx0aXRlbXMuZm9yRWFjaChpdGVtPT57XHJcblx0XHRcdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRcdFx0bGkudGV4dENvbnRlbnQgPSBpdGVtO1xyXG5cdFx0XHRsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyTmF2TWVudSA9IChpdGVtcyA9IFtdLCBjbGFzc0xpc3RJdGVtID0gW10sIGNsYXNzTGlzdCA9IFtdKSA9PiB7XHJcblx0bGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG5cdGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xyXG5cdFx0XHR1bC5jbGFzc0xpc3QuYWRkKGMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRpZiAoJ2xpbmsnIGluIGl0ZW0gJiYgJ3RleHQnIGluIGl0ZW0gJiYgJ2lkJyBpbiBpdGVtKSB7XHJcblx0XHRcdGEuaHJlZiA9IGl0ZW0ubGluaztcclxuXHRcdFx0YS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcclxuXHRcdFx0YS5pZCA9IGl0ZW0uaWQ7XHJcblx0XHRcdGlmIChjbGFzc0xpc3RJdGVtLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjbGFzc0xpc3RJdGVtLmZvckVhY2goKGMpID0+IHtcclxuXHRcdFx0XHRcdGEuY2xhc3NMaXN0LmFkZChjKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmF2LnRleHRDb250ZW50ID0gJ0Vycm9yICEnO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYXR0cmlidXRlIGZvciBuYXYgYmFyIGl0ZW0nKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICByZXR1cm4gbmF2O1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRWxlbWVudD0gKGVsZW1lbnRPYmplY3QpID0+IHtcclxuICAgIGNvbnN0IHtlbGVtZW50ID0gXCJcIiwgYXR0cmlidXRlT2JqZWN0PXt9IH0gPSBlbGVtZW50T2JqZWN0O1xyXG4gICAgaWYoZWxlbWVudCA9PT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwiQmxhbmsgdmFsdWUgaW4gZWxlbWVudFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYXR0cmlidXRlT2JqZWN0LCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlT2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyTGlzdCwgcmVuZGVyRWxlbWVudCxyZW5kZXJEaXYsIHJlbmRlckltYWdlLCByZW5kZXJIZWFkZXIsIHJlbmRlck5hdk1lbnUsIHJlbmRlckgxIH07XHJcbiIsImNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XHJcbmltcG9ydCByZXN0YXVyYW50RnJvbnRJbWFnZSBmcm9tICcuL3Jlc3R1YXJhbnQtZnJvbnQtcGFnZS5qcGcnO1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgbWFpbkNvbnRlbnREaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gRGl2IFdpdGggaW1hZ2UgXHJcbiAgICBsZXQgZGl2MSA9IGhlbHBlci5yZW5kZXJEaXYoKTtcclxuICAgIGxldCBpbWcxID0gaGVscGVyLnJlbmRlckltYWdlKHJlc3RhdXJhbnRGcm9udEltYWdlKTtcclxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XHJcbiAgICAvLyBBYm91dCBVcyBEaXZcclxuICAgIGxldCBkaXYyID0gaGVscGVyLnJlbmRlckRpdigpO1xyXG4gICAgbGV0IGFib3V0SDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgyXCJ9KTtcclxuICAgIGFib3V0SDIudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XHJcbiAgICBsZXQgYWJvdXRQID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe2VsZW1lbnQ6XCJwXCIsYXR0cmlidXRlT2JqZWN0Ont9fSk7XHJcbiAgICBhYm91dFAudGV4dENvbnRlbnQgPSBcIk91ciByZXN0YXVyYW50IHNlcnZlcyBhbGwga2luZHMgb2YgU291dGggSW5kaWFuIGZvb2QsIGEgc3BlY2lhbGl0eSBpbiBJbmRpYW4gY3Vpc2luZSByYXJlbHkgZm91bmQgYXJvdW5kIHRoZXNlIHBhcnRzLiBTb3V0aCBJbmRpYW4gRGlzaGVzIGhhdmUgYSBrbm93biByZXB1dGF0aW9uIGZvciBiZWluZyBkZWxpY2lvdXMsIGVhc2lseSBkaWdlc3RhYmxlIGFuZCBiZWluZyBoZWFsdGhpZXIgaGF2aW5nIGdsdXRlbiBmcmVlIG9wdGlvbnMgdW5saWtlIHRyYWRpdGlvbmFsIE5vcnRoIEluZGlhbiBjdWlzaW5lIHNlcnZlZCBhcm91bmQgbW9zdCBwYXJ0cy4gV2UgYXJlIGxvY2F0ZWQgaW4gc29tZSByYW5kb20gbG9jYXRpb24gYXQgc29tZSByYW5kb20gY2l0eS5cIlxyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChhYm91dEgyKTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoYWJvdXRQKTtcclxuICAgIC8vIFdlIG9mZmVyIERpdlxyXG4gICAgbGV0IGRpdjMgPSBoZWxwZXIucmVuZGVyRGl2KCk7XHJcbiAgICBsZXQgb2ZmZXJIMiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDJcIn0pO1xyXG4gICAgbGV0IG9mZmVyUCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwicFwifSk7XHJcbiAgICBsZXQgb2ZmZXJMaXN0ID0gaGVscGVyLnJlbmRlckxpc3QoXCJ1bFwiLFtcclxuICAgICAgICBcIkJyZWFrZmFzdCAtIElkbGlzLCBEb3NhcywgVmFkYXMgYW5kIG11Y2ggbW9yZSAhXCIsXHJcbiAgICAgICAgXCJMdW5jaCAtIFJhc3NhbSB3aXRoIFJpY2UsIEN1cnJpZXMoU2FhciBhbmQgQW1iYXQpIGFuZCBtb3JlICFcIixcclxuICAgICAgICBcIkRpbm5lciBhbmQgc3BlY2lhbHRpZXMgLSAgUmF3YSBTZWFmb29kIGFuZCBDaGlja2VuIEZyeSBhbmQgbXVjaCBtb3JlICFcIlxyXG4gICAgXSk7XHJcbiAgICBvZmZlckgyLnRleHRDb250ZW50ID0gXCJXZSBIYXZlXCI7XHJcbiAgICBvZmZlclAudGV4dENvbnRlbnQgPSBcIlNvbWUgb2YsIGlmIG5vdCB0aGUgYmVzdCBpbiB3aGF0IFNvdXRoIEluZGlhbiBoYXMgdG8gb2ZmZXIgIVwiXHJcbiAgICBvZmZlclAuYXBwZW5kQ2hpbGQob2ZmZXJMaXN0KTtcclxuICAgIGRpdjMuYXBwZW5kQ2hpbGQob2ZmZXJIMik7XHJcbiAgICBkaXYzLmFwcGVuZENoaWxkKG9mZmVyUCk7XHJcblxyXG5cclxuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjEpO1xyXG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XHJcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChkaXYzKTtcclxuICAgIHJldHVybiBtYWluQ29udGVudERpdjtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJ9OyIsImNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XHJcblxyXG5jb25zdCByZW5kZXIgPSAoKSA9PntcclxuICAgIHJldHVybiBoZWxwZXIucmVuZGVyRGl2KCdZb3UgYXJlIGFjY2VzaW5nIHRoZSBtZW51IHBhZ2UgdXNpbmcgdGhlIG1lbnUgcGFnZSBmaWxlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCAge3JlbmRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLypcclxuSW5kZXggcGFnZSBvbmx5IG1lYW50IGZvciBzd2l0Y2hpbmcgZnVuY3Rpb25hbGl0eVxyXG5BbGwgb3RoZXIgaW1wb3J0cyBhcmUgaW1hZ2VzIGFyZSB0byBiZSBkb25lIGluIHRoZSBpbmRpdmlkdWFsIHBhZ2UgZmlsZXMgZm9yIGVhY2ggb2YgdGhlIHRhYnMuXHJcbkZ1bmN0aW9uYWxpdHkgaXMgc3BsaXQgaW4gNCBwcmltYXJ5IHBhcnRzOlxyXG4xLiBQYWdlIHRvIGludHJvZHVjZSB0aGUgaG90ZWwuXHJcbjIuIE1lbnUgcGFnZS5cclxuMy4gUmV2aWV3IGFuZCBjb250YWN0IHBhZ2UuXHJcbjQuIE1haW4gbWVudSBmb3IgdGFiIHN3aXRjaGluZy5cclxuKi9cclxuXHJcbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XHJcbmNvbnN0IG1haW5wYWdlID0gcmVxdWlyZSgnLi9tYWlucGFnZScpO1xyXG5jb25zdCBjb250YWN0cGFnZSA9IHJlcXVpcmUoJy4vY29udGFjdHBhZ2UnKTtcclxuY29uc3QgbWVudXBhZ2UgPSByZXF1aXJlKCcuL21lbnVwYWdlJyk7XHJcbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuLy8gY29udGVudERpdi50ZXh0Q29udGVudCA9ICdUZXN0aW5nIHB1cnBvc2VzIG9ubHkuJztcclxuXHJcbmNvbnN0IHJlbmRlck1haW5NZW51ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHRpdGxlID0gaGVscGVyLnJlbmRlckgxKCdJZGxpLWNpb3VzIScpO1xyXG5cdGNvbnN0IG5hdmJhciA9IGhlbHBlci5yZW5kZXJOYXZNZW51KFtcclxuXHRcdHsgaWQ6ICdtYWluJywgdGV4dDogJ0Fib3V0IFVzJywgbGluazogJyMnIH0sXHJcblx0XHR7IGlkOiAnbWVudScsIHRleHQ6ICdNZW51JywgbGluazogJyMnIH0sXHJcblx0XHR7IGlkOiAnY29udGFjdCcsIHRleHQ6ICdHZXQgSW4gdG91Y2ggIScsIGxpbms6ICcjJyB9XHJcblx0XSk7XHJcblx0Y29uc3QgaGVhZGVyID0gaGVscGVyLnJlbmRlckhlYWRlcihbIHRpdGxlLCBuYXZiYXIgXSk7XHJcblx0cmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVuZGVyTWFpbk1lbnUoKSk7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVscGVyLnJlbmRlckRpdihcIlwiLFtdLFwicGFnZVwiKSk7XHJcbmNvbnN0IHBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xyXG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpe1xyXG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VEaXYuYXBwZW5kQ2hpbGQobWFpbnBhZ2UucmVuZGVyKCkpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCl7XHJcbiAgICBwYWdlRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51cGFnZS5yZW5kZXIoKSk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdFBhZ2UoKXtcclxuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RwYWdlLnJlbmRlcigpKTtcclxufVxyXG4vLyBmdW5jdGlvbiBldmVudExpc3RuZXJcclxuY29uc3QgbWFpblBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuY29uc3QgbWVudVBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuY29uc3QgY29udGFjdFBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcclxuXHJcblxyXG5tYWluUGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1haW5QYWdlKTtcclxubWVudVBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJNZW51UGFnZSk7XHJcbmNvbnRhY3RQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyQ29udGFjdFBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==