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
/* harmony export */   "renderElement": () => (/* binding */ renderElement),
/* harmony export */   "renderDiv": () => (/* binding */ renderDiv),
/* harmony export */   "renderImage": () => (/* binding */ renderImage),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader),
/* harmony export */   "renderNavMenu": () => (/* binding */ renderNavMenu),
/* harmony export */   "renderH1": () => (/* binding */ renderH1)
/* harmony export */ });
const renderImage = (src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png', id = '') => {
	let img = new Image();
	img.src = restaurantimg;
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
const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

const render = () => {
    return helper.renderDiv('You are accessing the main page using the main JS file');
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
	const title = helper.renderH1('My Generic Bar');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTs7QUFFakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUV1Rjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGdkYsZUFBZSxtQkFBTyxDQUFDLGlDQUFVOztBQUVqQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsZUFBZSxtQkFBTyxDQUFDLGlDQUFVOztBQUVqQztBQUNBO0FBQ0E7Ozs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLDJDQUFlO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5Q0FBeUM7QUFDN0MsSUFBSSxxQ0FBcUM7QUFDekMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PntcbiAgICByZXR1cm4gaGVscGVyLnJlbmRlckRpdignWW91IGFyZSBpbiB0aGUgY29udGFjdCBwYWdlIHVzaW5nIHRoZSBjb250YWN0IHBhZ2UgSlMnKTtcbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsImNvbnN0IHJlbmRlckltYWdlID0gKHNyYyA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDEvSW1hZ2Vfbm90X2F2YWlsYWJsZS5wbmcnLCBpZCA9ICcnKSA9PiB7XG5cdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0aW1nLnNyYyA9IHJlc3RhdXJhbnRpbWc7XG5cdGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQgPT09ICcnID8gJycgOiBpZCk7XG5cdHJldHVybiBpbWc7XG59O1xuY29uc3QgcmVuZGVyRGl2ID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10sIGlkID0gJycpID0+IHtcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHRjbGFzc2xpc3QuZm9yRWFjaChjPT4gZGl2LmNsYXNzTGlzdC5hZGQoYykpO1xuXHRkaXYuaWQgPSBpZCAhPT0gJycgPyBpZCA6ICcnO1xuXHRyZXR1cm4gZGl2O1xufTtcbmNvbnN0IHJlbmRlckgxID0gKGNvbnRlbnQgPSAnJywgY2xhc3NsaXN0ID0gW10pID0+IHtcblx0bGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0aDEudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHRpZiAoY2xhc3NsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGgxO1xuXHRlbHNlIHtcblx0XHRjbGFzc2xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aDEuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaDE7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoZWxlbWVudHMgPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcblx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGhlYWRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXHRpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IHJlbmRlck5hdk1lbnUgPSAoaXRlbXMgPSBbXSwgY2xhc3NMaXN0SXRlbSA9IFtdLCBjbGFzc0xpc3QgPSBbXSkgPT4ge1xuXHRsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cdGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdGNsYXNzTGlzdC5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHR1bC5jbGFzc0xpc3QuYWRkKGMpO1xuXHRcdH0pO1xuXHR9XG5cdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRpZiAoJ2xpbmsnIGluIGl0ZW0gJiYgJ3RleHQnIGluIGl0ZW0gJiYgJ2lkJyBpbiBpdGVtKSB7XG5cdFx0XHRhLmhyZWYgPSBpdGVtLmxpbms7XG5cdFx0XHRhLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXHRcdFx0YS5pZCA9IGl0ZW0uaWQ7XG5cdFx0XHRpZiAoY2xhc3NMaXN0SXRlbS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNsYXNzTGlzdEl0ZW0uZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0XHRcdGEuY2xhc3NMaXN0LmFkZChjKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2LnRleHRDb250ZW50ID0gJ0Vycm9yICEnO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGF0dHJpYnV0ZSBmb3IgbmF2IGJhciBpdGVtJyk7XG5cdFx0fVxuXHR9KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCByZW5kZXJFbGVtZW50PSAoZWxlbWVudE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtlbGVtZW50ID0gXCJcIiwgYXR0cmlidXRlT2JqZWN0PXt9IH0gPSBlbGVtZW50T2JqZWN0O1xuICAgIGlmKGVsZW1lbnQgPT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIkJsYW5rIHZhbHVlIGluIGVsZW1lbnRcIik7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChhdHRyaWJ1dGVPYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlT2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckVsZW1lbnQscmVuZGVyRGl2LCByZW5kZXJJbWFnZSwgcmVuZGVySGVhZGVyLCByZW5kZXJOYXZNZW51LCByZW5kZXJIMSB9O1xuIiwiY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBoZWxwZXIucmVuZGVyRGl2KCdZb3UgYXJlIGFjY2Vzc2luZyB0aGUgbWFpbiBwYWdlIHVzaW5nIHRoZSBtYWluIEpTIGZpbGUnKTtcbn1cblxuZXhwb3J0IHtyZW5kZXJ9OyIsImNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+e1xuICAgIHJldHVybiBoZWxwZXIucmVuZGVyRGl2KCdZb3UgYXJlIGFjY2VzaW5nIHRoZSBtZW51IHBhZ2UgdXNpbmcgdGhlIG1lbnUgcGFnZSBmaWxlJyk7XG59XG5cbmV4cG9ydCAge3JlbmRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuSW5kZXggcGFnZSBvbmx5IG1lYW50IGZvciBzd2l0Y2hpbmcgZnVuY3Rpb25hbGl0eVxuQWxsIG90aGVyIGltcG9ydHMgYXJlIGltYWdlcyBhcmUgdG8gYmUgZG9uZSBpbiB0aGUgaW5kaXZpZHVhbCBwYWdlIGZpbGVzIGZvciBlYWNoIG9mIHRoZSB0YWJzLlxuRnVuY3Rpb25hbGl0eSBpcyBzcGxpdCBpbiA0IHByaW1hcnkgcGFydHM6XG4xLiBQYWdlIHRvIGludHJvZHVjZSB0aGUgaG90ZWwuXG4yLiBNZW51IHBhZ2UuXG4zLiBSZXZpZXcgYW5kIGNvbnRhY3QgcGFnZS5cbjQuIE1haW4gbWVudSBmb3IgdGFiIHN3aXRjaGluZy5cbiovXG5cbmNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5jb25zdCBtYWlucGFnZSA9IHJlcXVpcmUoJy4vbWFpbnBhZ2UnKTtcbmNvbnN0IGNvbnRhY3RwYWdlID0gcmVxdWlyZSgnLi9jb250YWN0cGFnZScpO1xuY29uc3QgbWVudXBhZ2UgPSByZXF1aXJlKCcuL21lbnVwYWdlJyk7XG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4vLyBjb250ZW50RGl2LnRleHRDb250ZW50ID0gJ1Rlc3RpbmcgcHVycG9zZXMgb25seS4nO1xuXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBoZWxwZXIucmVuZGVySDEoJ015IEdlbmVyaWMgQmFyJyk7XG5cdGNvbnN0IG5hdmJhciA9IGhlbHBlci5yZW5kZXJOYXZNZW51KFtcblx0XHR7IGlkOiAnbWFpbicsIHRleHQ6ICdBYm91dCBVcycsIGxpbms6ICcjJyB9LFxuXHRcdHsgaWQ6ICdtZW51JywgdGV4dDogJ01lbnUnLCBsaW5rOiAnIycgfSxcblx0XHR7IGlkOiAnY29udGFjdCcsIHRleHQ6ICdHZXQgSW4gdG91Y2ggIScsIGxpbms6ICcjJyB9XG5cdF0pO1xuXHRjb25zdCBoZWFkZXIgPSBoZWxwZXIucmVuZGVySGVhZGVyKFsgdGl0bGUsIG5hdmJhciBdKTtcblx0cmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVuZGVyTWFpbk1lbnUoKSk7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGhlbHBlci5yZW5kZXJEaXYoXCJcIixbXSxcInBhZ2VcIikpO1xuY29uc3QgcGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChtYWlucGFnZS5yZW5kZXIoKSk7XG59XG5mdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChtZW51cGFnZS5yZW5kZXIoKSk7XG59XG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChjb250YWN0cGFnZS5yZW5kZXIoKSk7XG59XG4vLyBmdW5jdGlvbiBldmVudExpc3RuZXJcbmNvbnN0IG1haW5QYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCBtZW51UGFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdFBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuXG5tYWluUGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1haW5QYWdlKTtcbm1lbnVQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyTWVudVBhZ2UpO1xuY29udGFjdFBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJDb250YWN0UGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9