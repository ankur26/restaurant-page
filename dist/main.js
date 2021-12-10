/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
    pageDiv.appendChild(helper.renderDiv('You clicked on the main page'));
}
function renderMenuPage(){
    pageDiv.innerHTML = '';
    pageDiv.appendChild(helper.renderDiv('You clicked on the Menu Page'));
}
function renderContactPage(){
    pageDiv.innerHTML = '';
    pageDiv.appendChild(helper.renderDiv('You clicked on the Contact page'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUV1Rjs7Ozs7OztVQ3ZGdkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5Q0FBeUM7QUFDN0MsSUFBSSxxQ0FBcUM7QUFDekMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJJbWFnZSA9IChzcmMgPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9kL2QxL0ltYWdlX25vdF9hdmFpbGFibGUucG5nJywgaWQgPSAnJykgPT4ge1xuXHRsZXQgaW1nID0gbmV3IEltYWdlKCk7XG5cdGltZy5zcmMgPSByZXN0YXVyYW50aW1nO1xuXHRpbWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkID09PSAnJyA/ICcnIDogaWQpO1xuXHRyZXR1cm4gaW1nO1xufTtcbmNvbnN0IHJlbmRlckRpdiA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdLCBpZCA9ICcnKSA9PiB7XG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LnRleHRDb250ZW50ID0gY29udGVudDtcblx0Y2xhc3NsaXN0LmZvckVhY2goYz0+IGRpdi5jbGFzc0xpc3QuYWRkKGMpKTtcblx0ZGl2LmlkID0gaWQgIT09ICcnID8gaWQgOiAnJztcblx0cmV0dXJuIGRpdjtcbn07XG5jb25zdCByZW5kZXJIMSA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGgxLnRleHRDb250ZW50ID0gY29udGVudDtcblx0aWYgKGNsYXNzbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBoMTtcblx0ZWxzZSB7XG5cdFx0Y2xhc3NsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGgxLmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGgxO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKGVsZW1lbnRzID0gW10sIGNsYXNzTGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0Y2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKGMpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCByZW5kZXJOYXZNZW51ID0gKGl0ZW1zID0gW10sIGNsYXNzTGlzdEl0ZW0gPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcblx0bGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXHRsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0dWwuY2xhc3NMaXN0LmFkZChjKTtcblx0XHR9KTtcblx0fVxuXHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0aWYgKCdsaW5rJyBpbiBpdGVtICYmICd0ZXh0JyBpbiBpdGVtICYmICdpZCcgaW4gaXRlbSkge1xuXHRcdFx0YS5ocmVmID0gaXRlbS5saW5rO1xuXHRcdFx0YS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblx0XHRcdGEuaWQgPSBpdGVtLmlkO1xuXHRcdFx0aWYgKGNsYXNzTGlzdEl0ZW0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjbGFzc0xpc3RJdGVtLmZvckVhY2goKGMpID0+IHtcblx0XHRcdFx0XHRhLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdi50ZXh0Q29udGVudCA9ICdFcnJvciAhJztcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhdHRyaWJ1dGUgZm9yIG5hdiBiYXIgaXRlbScpO1xuXHRcdH1cblx0fSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgcmVuZGVyRWxlbWVudD0gKGVsZW1lbnRPYmplY3QpID0+IHtcbiAgICBjb25zdCB7ZWxlbWVudCA9IFwiXCIsIGF0dHJpYnV0ZU9iamVjdD17fSB9ID0gZWxlbWVudE9iamVjdDtcbiAgICBpZihlbGVtZW50ID09PSBcIlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJCbGFuayB2YWx1ZSBpbiBlbGVtZW50XCIpO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYXR0cmlidXRlT2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZU9iamVjdFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJFbGVtZW50LHJlbmRlckRpdiwgcmVuZGVySW1hZ2UsIHJlbmRlckhlYWRlciwgcmVuZGVyTmF2TWVudSwgcmVuZGVySDEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbkluZGV4IHBhZ2Ugb25seSBtZWFudCBmb3Igc3dpdGNoaW5nIGZ1bmN0aW9uYWxpdHlcbkFsbCBvdGhlciBpbXBvcnRzIGFyZSBpbWFnZXMgYXJlIHRvIGJlIGRvbmUgaW4gdGhlIGluZGl2aWR1YWwgcGFnZSBmaWxlcyBmb3IgZWFjaCBvZiB0aGUgdGFicy5cbkZ1bmN0aW9uYWxpdHkgaXMgc3BsaXQgaW4gNCBwcmltYXJ5IHBhcnRzOlxuMS4gUGFnZSB0byBpbnRyb2R1Y2UgdGhlIGhvdGVsLlxuMi4gTWVudSBwYWdlLlxuMy4gUmV2aWV3IGFuZCBjb250YWN0IHBhZ2UuXG40LiBNYWluIG1lbnUgZm9yIHRhYiBzd2l0Y2hpbmcuXG4qL1xuXG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xubGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY29udGVudERpdi50ZXh0Q29udGVudCA9ICdUZXN0aW5nIHB1cnBvc2VzIG9ubHkuJztcblxuY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gaGVscGVyLnJlbmRlckgxKCdNeSBHZW5lcmljIEJhcicpO1xuXHRjb25zdCBuYXZiYXIgPSBoZWxwZXIucmVuZGVyTmF2TWVudShbXG5cdFx0eyBpZDogJ21haW4nLCB0ZXh0OiAnQWJvdXQgVXMnLCBsaW5rOiAnIycgfSxcblx0XHR7IGlkOiAnbWVudScsIHRleHQ6ICdNZW51JywgbGluazogJyMnIH0sXG5cdFx0eyBpZDogJ2NvbnRhY3QnLCB0ZXh0OiAnR2V0IEluIHRvdWNoICEnLCBsaW5rOiAnIycgfVxuXHRdKTtcblx0Y29uc3QgaGVhZGVyID0gaGVscGVyLnJlbmRlckhlYWRlcihbIHRpdGxlLCBuYXZiYXIgXSk7XG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHJlbmRlck1haW5NZW51KCkpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChoZWxwZXIucmVuZGVyRGl2KFwiXCIsW10sXCJwYWdlXCIpKTtcbmNvbnN0IHBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xuZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKXtcbiAgICBwYWdlRGl2LmlubmVySFRNTCA9ICcnO1xuICAgIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoaGVscGVyLnJlbmRlckRpdignWW91IGNsaWNrZWQgb24gdGhlIG1haW4gcGFnZScpKTtcbn1cbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCl7XG4gICAgcGFnZURpdi5pbm5lckhUTUwgPSAnJztcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKGhlbHBlci5yZW5kZXJEaXYoJ1lvdSBjbGlja2VkIG9uIHRoZSBNZW51IFBhZ2UnKSk7XG59XG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpe1xuICAgIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChoZWxwZXIucmVuZGVyRGl2KCdZb3UgY2xpY2tlZCBvbiB0aGUgQ29udGFjdCBwYWdlJykpO1xufVxuLy8gZnVuY3Rpb24gZXZlbnRMaXN0bmVyXG5jb25zdCBtYWluUGFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuY29uc3QgbWVudVBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3RQYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5cblxubWFpblBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJNYWluUGFnZSk7XG5tZW51UGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1lbnVQYWdlKTtcbmNvbnRhY3RQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyQ29udGFjdFBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==