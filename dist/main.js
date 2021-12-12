/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    box-sizing: border-box;\n    /* font-size: 16px; */\n    text-align: center;\n}\n#content{\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    padding:0 10%\n}\nnav ul{\n    list-style-type: none;\n    display: flex;\n    gap:15px;\n    padding:0;\n}\nli{\n    list-style-position: inside;\n}\nimg{\n    width: 100%;\n    height: auto;\n}\n.main{\n    display: flex;\n    \n}\n.main-page-img{\n    min-width: 50%;\n}\n.main-page-content{\n    padding:10%;\n}\n.main-page-content ul{\n    padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB;AACJ;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,QAAQ;IACR,SAAS;AACb;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;;AAEjB;AACA;IACI,cAAc;AAClB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;AACd","sourcesContent":[":root{\n    box-sizing: border-box;\n    /* font-size: 16px; */\n    text-align: center;\n}\n#content{\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    padding:0 10%\n}\nnav ul{\n    list-style-type: none;\n    display: flex;\n    gap:15px;\n    padding:0;\n}\nli{\n    list-style-position: inside;\n}\nimg{\n    width: 100%;\n    height: auto;\n}\n.main{\n    display: flex;\n    \n}\n.main-page-img{\n    min-width: 50%;\n}\n.main-page-content{\n    padding:10%;\n}\n.main-page-content ul{\n    padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    let maincontent = document.getElementById('page');
    maincontent.innerHTML = '';

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

}



/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _restuarant_front_page_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restuarant-front-page.jpg */ "./src/restuarant-front-page.jpg");
const helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

const render = () => {
	let maincontent = document.getElementById('page');
	maincontent.innerHTML = '';
	maincontent.classList.add('main');
	// Div With image
	let div1 = helper.renderDiv('', [ 'main-page-img' ]);
	let img1 = helper.renderImage(_restuarant_front_page_jpg__WEBPACK_IMPORTED_MODULE_0__);
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




/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // im.style.width = "100%";
    // im.style.height = "auto";
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
    let maincontent = document.getElementById('page');
    maincontent.innerHTML = '';

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
}



/***/ }),

/***/ "./src/appe.jpg":
/*!**********************!*\
  !*** ./src/appe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09bf887800fdffd71323.jpg";

/***/ }),

/***/ "./src/chettinad-chicken-curry.jpg":
/*!*****************************************!*\
  !*** ./src/chettinad-chicken-curry.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "516bba3b2d101094c312.jpg";

/***/ }),

/***/ "./src/dosa.jpg":
/*!**********************!*\
  !*** ./src/dosa.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89e841d436978a9a60c7.jpg";

/***/ }),

/***/ "./src/idli-vada-sambar.jpg":
/*!**********************************!*\
  !*** ./src/idli-vada-sambar.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "282f62f58e210cc87627.jpg";

/***/ }),

/***/ "./src/restuarant-front-page.jpg":
/*!***************************************!*\
  !*** ./src/restuarant-front-page.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7O0FBRXJCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseUNBQXlDO0FBQzdDLElBQUkscUNBQXFDO0FBQ3pDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW5wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBmb250LXNpemU6IDE2cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzowIDEwJVxcbn1cXG5uYXYgdWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjE1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXG59XFxuaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcbi5tYWluLXBhZ2UtaW1ne1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG59XFxuLm1haW4tcGFnZS1jb250ZW50e1xcbiAgICBwYWRkaW5nOjEwJTtcXG59XFxuLm1haW4tcGFnZS1jb250ZW50IHVse1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBmb250LXNpemU6IDE2cHg7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzowIDEwJVxcbn1cXG5uYXYgdWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjE1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXG59XFxuaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcbi5tYWluLXBhZ2UtaW1ne1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG59XFxuLm1haW4tcGFnZS1jb250ZW50e1xcbiAgICBwYWRkaW5nOjEwJTtcXG59XFxuLm1haW4tcGFnZS1jb250ZW50IHVse1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyJyk7XG5cblxuY29uc3QgcmVuZGVyRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiZm9ybVwifSk7XG4gICAgLy9OYW1lLEVtYWlsLFBob25lLFJlcXVlc3RGb3JcbiAgICBsZXQgbmFtZWRpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgbmFtZUxhYmVsID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIGZvcjpcIm5hbWVcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbGV0IG5hbWVJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwidGV4dFwiLFxuICAgICAgICAgICAgaWQ6XCJuYW1lXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjpcIkVudGVyIHlvdXIgbmFtZSBoZXJlXCIsXG4gICAgICAgICAgICBuYW1lOlwibmFtZVwiLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbmFtZWRpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVkaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBsZXQgZW1haWxEaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IGVtYWlsTGFiZWwgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnQ6XCJsYWJlbFwiLFxuICAgICAgICBhdHRyaWJ1dGVPYmplY3Q6e1xuICAgICAgICAgICAgZm9yOlwiZW1haWxcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwiZW1haWxcIixcbiAgICAgICAgICAgIGlkOlwiZW1haWxcIixcbiAgICAgICAgICAgIG5hbWU6XCJlbWFpbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciBlbWFpbFwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6XCJcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgbGV0IHBob25lRGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBwaG9uZUxhYmVsID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwibGFiZWxcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIGZvcjpcInBob25lXCJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBob25lTGFiZWwudGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlclwiO1xuICAgIGxldCBwaG9uZUlucHV0ID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwiaW5wdXRcIixcbiAgICAgICAgYXR0cmlidXRlT2JqZWN0OntcbiAgICAgICAgICAgIHR5cGU6XCJudW1iZXJcIixcbiAgICAgICAgICAgIG5hbWU6XCJwaG9uZVwiLFxuICAgICAgICAgICAgaWQ6XCJwaG9uZVwiLFxuICAgICAgICAgICAgbWluOlwiMTExMTExMTExMVwiLFxuICAgICAgICAgICAgbWF4OlwiOTk5OTk5OTk5OVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XCJFbnRlciBwaG9uZSBudW1iZXJcIlxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImlucHV0XCIsXG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdDp7XG4gICAgICAgICAgICB0eXBlOlwic3VibWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTpcIlN1Ym1pdFwiLFxuICAgICAgICAgICAgaWQ6XCJzdWJtaXRcIixcbiAgICAgICAgICAgIG5hbWU6XCJzdWJtaXRcIlxuICAgICAgICB9XG4gICAgfSlcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVkaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybTtcbn1cblxuY29uc3QgcmVuZGVyUmV2aWV3RGl2ID0gKHJldmlldyxjdXN0b21lcikgPT4ge1xuICAgIGxldCBkaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IHJldmlld2gzID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwiaDNcIixcbiAgICB9KTtcbiAgICByZXZpZXdoMy50ZXh0Q29udGVudCA9IHJldmlldztcbiAgICBsZXQgY3VzdG9tZXJOYW1lID0gaGVscGVyLnJlbmRlckVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50OlwicFwiLFxuICAgIH0pO1xuICAgIGN1c3RvbWVyTmFtZS50ZXh0Q29udGVudCA9IGN1c3RvbWVyO1xuICAgIGRpdi5hcHBlbmRDaGlsZChyZXZpZXdoMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGN1c3RvbWVyTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgbGV0IG1haW5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCByZXZpZXdEaXYgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IHJldmlldzEgPSByZW5kZXJSZXZpZXdEaXYoXCJBYnNvbHV0ZWx5IEZhbnRhc3RpYyBGb29kIVwiLFwiUmFuZG9tIEN1c3RvbWVyIDFcIik7XG4gICAgbGV0IHJldmlldzIgPSByZW5kZXJSZXZpZXdEaXYoXCJUaGUgSWRsaXMgYXJlIHRvIGRpZSBmb3IgIVwiLFwiUmFuZG9tIEN1c3RvbWVyIDJcIik7XG4gICAgbGV0IHJldmlldzMgPSByZW5kZXJSZXZpZXdEaXYoXCJGYW50YXN0aWMgQW1iaWVuY2UgYW5kIGZvb2QgdG8gbWF0Y2hcIixcIlJhbmRvbSBDdXN0b21lciAzXCIpO1xuICAgIHJldmlld0Rpdi5hcHBlbmRDaGlsZChyZXZpZXcxKTtcbiAgICByZXZpZXdEaXYuYXBwZW5kQ2hpbGQocmV2aWV3Mik7XG4gICAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKHJldmlldzMpO1xuICAgIGxldCBjb250YWN0Rm9ybURpdiA9IGhlbHBlci5yZW5kZXJEaXYoKTtcbiAgICBsZXQgY29udGFjdEZvcm1UaXRsZSA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtcbiAgICAgICAgZWxlbWVudDpcImgyXCIsXG4gICAgfSk7XG4gICAgY29udGFjdEZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVcyFcIjtcbiAgICBsZXQgZm9ybSA9IHJlbmRlckZvcm0oKTtcbiAgICBjb250YWN0Rm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybVRpdGxlKTtcbiAgICBjb250YWN0Rm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChyZXZpZXdEaXYpO1xuICAgIG1haW5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtRGl2KTtcbiAgICAvLyBtYWluY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxufVxuXG5leHBvcnQge3JlbmRlcn07IiwiY29uc3QgcmVuZGVySW1hZ2UgPSAoc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMS9JbWFnZV9ub3RfYXZhaWxhYmxlLnBuZycsIGlkID0gJycpID0+IHtcblx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRpbWcuc3JjID0gc3JjO1xuXHRpbWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkID09PSAnJyA/ICcnIDogaWQpO1xuXHRyZXR1cm4gaW1nO1xufTtcbmNvbnN0IHJlbmRlckRpdiA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdLCBpZCA9ICcnKSA9PiB7XG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LnRleHRDb250ZW50ID0gY29udGVudDtcblx0Y2xhc3NsaXN0LmZvckVhY2goYz0+IGRpdi5jbGFzc0xpc3QuYWRkKGMpKTtcblx0aWYoaWQgIT09ICcnKSBkaXYuaWQgPSBpZDtcblx0cmV0dXJuIGRpdjtcbn07XG5jb25zdCByZW5kZXJIMSA9IChjb250ZW50ID0gJycsIGNsYXNzbGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGgxLnRleHRDb250ZW50ID0gY29udGVudDtcblx0aWYgKGNsYXNzbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBoMTtcblx0ZWxzZSB7XG5cdFx0Y2xhc3NsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdGgxLmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGgxO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKGVsZW1lbnRzID0gW10sIGNsYXNzTGlzdCA9IFtdKSA9PiB7XG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0Y2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKGMpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCByZW5kZXJMaXN0ID0gKGxpc3RUeXBlPVwiXCIsaXRlbXM9W10pPT57XG5cdGlmIChsaXN0VHlwZSA9PT0gXCJcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxpc3QgQ2Fubm90IGJlIEJsYW5rXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0cnkge1xuXHRcdGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VHlwZSk7XG5cdFx0aXRlbXMuZm9yRWFjaChpdGVtPT57XG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRsaS50ZXh0Q29udGVudCA9IGl0ZW07XG5cdFx0XHRsaXN0LmFwcGVuZENoaWxkKGxpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbGlzdDtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufVxuXG5jb25zdCByZW5kZXJOYXZNZW51ID0gKGl0ZW1zID0gW10sIGNsYXNzTGlzdEl0ZW0gPSBbXSwgY2xhc3NMaXN0ID0gW10pID0+IHtcblx0bGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXHRsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRjbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0dWwuY2xhc3NMaXN0LmFkZChjKTtcblx0XHR9KTtcblx0fVxuXHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0aWYgKCdsaW5rJyBpbiBpdGVtICYmICd0ZXh0JyBpbiBpdGVtICYmICdpZCcgaW4gaXRlbSkge1xuXHRcdFx0YS5ocmVmID0gaXRlbS5saW5rO1xuXHRcdFx0YS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblx0XHRcdGEuaWQgPSBpdGVtLmlkO1xuXHRcdFx0aWYgKGNsYXNzTGlzdEl0ZW0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjbGFzc0xpc3RJdGVtLmZvckVhY2goKGMpID0+IHtcblx0XHRcdFx0XHRhLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdi50ZXh0Q29udGVudCA9ICdFcnJvciAhJztcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhdHRyaWJ1dGUgZm9yIG5hdiBiYXIgaXRlbScpO1xuXHRcdH1cblx0fSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgcmVuZGVyRWxlbWVudD0gKGVsZW1lbnRPYmplY3QpID0+IHtcbiAgICBjb25zdCB7ZWxlbWVudCA9IFwiXCIsIGF0dHJpYnV0ZU9iamVjdD17fSB9ID0gZWxlbWVudE9iamVjdDtcbiAgICBpZihlbGVtZW50ID09PSBcIlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJCbGFuayB2YWx1ZSBpbiBlbGVtZW50XCIpO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYXR0cmlidXRlT2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZU9iamVjdFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbmRlckxpc3QsIHJlbmRlckVsZW1lbnQscmVuZGVyRGl2LCByZW5kZXJJbWFnZSwgcmVuZGVySGVhZGVyLCByZW5kZXJOYXZNZW51LCByZW5kZXJIMSB9O1xuIiwiY29uc3QgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXInKTtcbmltcG9ydCByZXN0YXVyYW50RnJvbnRJbWFnZSBmcm9tICcuL3Jlc3R1YXJhbnQtZnJvbnQtcGFnZS5qcGcnO1xuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuXHRsZXQgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xuXHRtYWluY29udGVudC5pbm5lckhUTUwgPSAnJztcblx0bWFpbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXHQvLyBEaXYgV2l0aCBpbWFnZVxuXHRsZXQgZGl2MSA9IGhlbHBlci5yZW5kZXJEaXYoJycsIFsgJ21haW4tcGFnZS1pbWcnIF0pO1xuXHRsZXQgaW1nMSA9IGhlbHBlci5yZW5kZXJJbWFnZShyZXN0YXVyYW50RnJvbnRJbWFnZSk7XG5cdGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XG5cdC8vIEFib3V0IFVzIERpdlxuXHRsZXQgZGl2MiA9IGhlbHBlci5yZW5kZXJEaXYoJycsIFsgJ21haW4tcGFnZS1jb250ZW50JyBdKTtcblx0bGV0IGFib3V0SDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7IGVsZW1lbnQ6ICdoMicgfSk7XG5cdGFib3V0SDIudGV4dENvbnRlbnQgPSAnQWJvdXQgdXMnO1xuXHRsZXQgYWJvdXRQID0gaGVscGVyLnJlbmRlckVsZW1lbnQoeyBlbGVtZW50OiAncCcsIGF0dHJpYnV0ZU9iamVjdDoge30gfSk7XG5cdGFib3V0UC50ZXh0Q29udGVudCA9XG5cdFx0J091ciByZXN0YXVyYW50IHNlcnZlcyBhbGwga2luZHMgb2YgU291dGggSW5kaWFuIGZvb2QsIGEgc3BlY2lhbGl0eSBpbiBJbmRpYW4gY3Vpc2luZSByYXJlbHkgZm91bmQgYXJvdW5kIHRoZXNlIHBhcnRzLiBTb3V0aCBJbmRpYW4gRGlzaGVzIGhhdmUgYSBrbm93biByZXB1dGF0aW9uIGZvciBiZWluZyBkZWxpY2lvdXMsIGVhc2lseSBkaWdlc3RhYmxlIGFuZCBiZWluZyBoZWFsdGhpZXIgaGF2aW5nIGdsdXRlbiBmcmVlIG9wdGlvbnMgdW5saWtlIHRyYWRpdGlvbmFsIE5vcnRoIEluZGlhbiBjdWlzaW5lIHNlcnZlZCBhcm91bmQgbW9zdCBwYXJ0cy4gV2UgYXJlIGxvY2F0ZWQgaW4gc29tZSByYW5kb20gbG9jYXRpb24gYXQgc29tZSByYW5kb20gY2l0eS4nO1xuXHRkaXYyLmFwcGVuZENoaWxkKGFib3V0SDIpO1xuXHRkaXYyLmFwcGVuZENoaWxkKGFib3V0UCk7XG5cdC8vIFdlIG9mZmVyIERpdlxuXHQvLyBsZXQgZGl2MyA9IGhlbHBlci5yZW5kZXJEaXYoKTtcblx0bGV0IG9mZmVySDIgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7IGVsZW1lbnQ6ICdoMicgfSk7XG5cdGxldCBvZmZlclAgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7IGVsZW1lbnQ6ICdwJyB9KTtcblx0bGV0IG9mZmVyTGlzdCA9IGhlbHBlci5yZW5kZXJMaXN0KCd1bCcsIFtcblx0XHQnQnJlYWtmYXN0IC0gSWRsaXMsIERvc2FzLCBWYWRhcyBhbmQgbXVjaCBtb3JlICEnLFxuXHRcdCdMdW5jaCAtIFJhc3NhbSB3aXRoIFJpY2UsIEN1cnJpZXMoU2FhciBhbmQgQW1iYXQpIGFuZCBtb3JlICEnLFxuXHRcdCdEaW5uZXIgYW5kIHNwZWNpYWx0aWVzIC0gIFJhd2EgU2VhZm9vZCBhbmQgQ2hpY2tlbiBGcnkgYW5kIG11Y2ggbW9yZSAhJ1xuXHRdKTtcblx0b2ZmZXJIMi50ZXh0Q29udGVudCA9ICdXZSBIYXZlJztcblx0b2ZmZXJQLnRleHRDb250ZW50ID0gJ1NvbWUgb2YsIGlmIG5vdCB0aGUgYmVzdCBpbiB3aGF0IFNvdXRoIEluZGlhbiBjdWlzaW5lIGhhcyB0byBvZmZlciAhJztcblx0b2ZmZXJQLmFwcGVuZENoaWxkKG9mZmVyTGlzdCk7XG5cdGRpdjIuYXBwZW5kQ2hpbGQob2ZmZXJIMik7XG5cdGRpdjIuYXBwZW5kQ2hpbGQob2ZmZXJMaXN0KTtcblxuXHRtYWluY29udGVudC5hcHBlbmRDaGlsZChkaXYxKTtcblx0bWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cdC8vIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGRpdjMpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJjb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuaW1wb3J0IGNoZXR0aW5hZENoaWNrZW4gZnJvbSBcIi4vY2hldHRpbmFkLWNoaWNrZW4tY3VycnkuanBnXCI7XG5pbXBvcnQgZG9zYSBmcm9tIFwiLi9kb3NhLmpwZ1wiO1xuaW1wb3J0IGlkbGkgZnJvbSBcIi4vaWRsaS12YWRhLXNhbWJhci5qcGdcIjtcbmltcG9ydCBhcHBlIGZyb20gXCIuL2FwcGUuanBnXCI7XG5jb25zdCByZW5kZXJNZW51SXRlbSA9IChpdGVtLGltYWdlLGNvbnRlbnQpID0+IHtcbiAgICBsZXQgZGl2ID0gaGVscGVyLnJlbmRlckRpdigpO1xuICAgIGxldCBpbSA9IGhlbHBlci5yZW5kZXJJbWFnZShpbWFnZSk7XG4gICAgLy8gaW0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAvLyBpbS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICBsZXQgaDMgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcImgzXCJ9KTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbGV0IHAgPSBoZWxwZXIucmVuZGVyRWxlbWVudCh7ZWxlbWVudDpcInBcIn0pO1xuICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgcmVuZGVyID0gKCkgPT57XG4gICAgbGV0IG1haW5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICBtYWluY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vVGl0bGUgXG4gICAgbGV0IG1lbnVIMiA9IGhlbHBlci5yZW5kZXJFbGVtZW50KHtlbGVtZW50OlwiaDJcIn0pO1xuICAgIG1lbnVIMi50ZXh0Q29udGVudCA9IFwiU29tZSBvZiBvdXIgc3RhbmRvdXQgaXRlbXMgdG8gdHJ5LlwiXG4gICAgLy9NZW51IEl0ZW1zIC0gY29udGFpbiBJZGVhbGx5IDIgaW4gYSByb3cgYW5kIHdpbGwgYmUgY2VudGVyZWQuXG4gICAgbGV0IGRpdk1lbnUgPSBoZWxwZXIucmVuZGVyRGl2KCk7XG4gICAgbGV0IG1lbnVJdGVtMSA9IHJlbmRlck1lbnVJdGVtKFwiSWRsaSBWYWRhIFNhbWJhclwiLGlkbGksXCJPdXIgU2lnbmF0dXJlIEl0ZW0hIFRoZSBjb21iaW5hdGlvbiBvZiB0aGUgdWx0cmEgc29mdCByaWNlIGNha2VzIGNhbGxlZCBpZGxpIHdpdGggdGhlIGNvbnRyYXN0aW5nIGNydW5jaCBvZiB0aGUgdmFkYSBkaXBwZWQgaW4gYSBzbGlnaHRseSBzd2VldCBhbmQgdGFuZ3kgc2FtYmFyIGFuZCBtZWxsb3cgY2h1dG5leSBpcyB0byBkaWUgZm9yIVwiKVxuICAgIGxldCBtZW51SXRlbTIgPSByZW5kZXJNZW51SXRlbShcIkRvc2EvTWFzYWxhIERvc2FcIixkb3NhLFwiTGlzdGVkIGFzIG9uZSBvZiB0aGUgd29ybGQncyBtb3N0IGRlbGljaW91cyBmb29kcywgYSBtYXNhbGEgZG9zYSBuZXZlciBmYWlscyB0byBpbXByZXNzIVwiKTtcbiAgICBsZXQgbWVudUl0ZW0zID0gcmVuZGVyTWVudUl0ZW0oXCJDaGlja2VuIENoZXR0aW5hZFwiLGNoZXR0aW5hZENoaWNrZW4sXCJGdWxsIG9mIGZsYXZvdXIgYW5kIGJvbGQgbWFzYWxhcywgdGhpcyBkaXNoIHdpbGwgZmxvb3IgeW91ciBmYW1pbHkgYW5kIGd1ZXN0cy4gQSBnb3JnZW91cyBtZWxhbmdlIG9mIG9uaW9ucywgdG9tYXRvZXMsIGNpbm5hbW9uIHN0aWNrcywgY2xvdmVzLCBjdW1pbiwgY3VycnkgbGVhdmVzIGFuZCBhIHJpY2ggY29jb251dC15IHBhc3RlLlwiKTtcbiAgICBsZXQgbWVudUl0ZW00ID0gcmVuZGVyTWVudUl0ZW0oXCJBcHBlXCIsYXBwZSxcIkEgdmFyaWF0aW9uIG9uIHRoZSB0cmFkaXRpb25hbCBJZGxpLCBmaWxsZWQgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMgYW5kIHBhbiBmcmllZCB0byBwZXJmZWN0aW9uLCBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHNvZnQgb24gdGhlIGluc2lkZS4gV29ydGggYSBzaG90IGZvciB0aG9zZSBoZWFsdGggZnJlYWtzIG91dCB0aGVyZSFcIik7XG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIGRpdk1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcbiAgICBkaXZNZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XG4gICAgZGl2TWVudS5hcHBlbmRDaGlsZChtZW51SXRlbTQpO1xuXG4gICAgbWFpbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUgyKTtcbiAgICBtYWluY29udGVudC5hcHBlbmRDaGlsZChkaXZNZW51KTtcbn1cblxuZXhwb3J0ICB7cmVuZGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qXG5JbmRleCBwYWdlIG9ubHkgbWVhbnQgZm9yIHN3aXRjaGluZyBmdW5jdGlvbmFsaXR5XG5BbGwgb3RoZXIgaW1wb3J0cyBhcmUgaW1hZ2VzIGFyZSB0byBiZSBkb25lIGluIHRoZSBpbmRpdmlkdWFsIHBhZ2UgZmlsZXMgZm9yIGVhY2ggb2YgdGhlIHRhYnMuXG5GdW5jdGlvbmFsaXR5IGlzIHNwbGl0IGluIDQgcHJpbWFyeSBwYXJ0czpcbjEuIFBhZ2UgdG8gaW50cm9kdWNlIHRoZSBob3RlbC5cbjIuIE1lbnUgcGFnZS5cbjMuIFJldmlldyBhbmQgY29udGFjdCBwYWdlLlxuNC4gTWFpbiBtZW51IGZvciB0YWIgc3dpdGNoaW5nLlxuKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpO1xuY29uc3QgbWFpbnBhZ2UgPSByZXF1aXJlKCcuL21haW5wYWdlJyk7XG5jb25zdCBjb250YWN0cGFnZSA9IHJlcXVpcmUoJy4vY29udGFjdHBhZ2UnKTtcbmNvbnN0IG1lbnVwYWdlID0gcmVxdWlyZSgnLi9tZW51cGFnZScpO1xubGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY29udGVudERpdi50ZXh0Q29udGVudCA9ICdUZXN0aW5nIHB1cnBvc2VzIG9ubHkuJztcblxuY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gaGVscGVyLnJlbmRlckgxKCdJZGxpLWNpb3VzIScpO1xuXHRjb25zdCBuYXZiYXIgPSBoZWxwZXIucmVuZGVyTmF2TWVudShbXG5cdFx0eyBpZDogJ21haW4nLCB0ZXh0OiAnQWJvdXQgVXMnLCBsaW5rOiAnIycgfSxcblx0XHR7IGlkOiAnbWVudScsIHRleHQ6ICdNZW51JywgbGluazogJyMnIH0sXG5cdFx0eyBpZDogJ2NvbnRhY3QnLCB0ZXh0OiAnR2V0IEluIHRvdWNoICEnLCBsaW5rOiAnIycgfVxuXHRdKTtcblx0Y29uc3QgaGVhZGVyID0gaGVscGVyLnJlbmRlckhlYWRlcihbIHRpdGxlLCBuYXZiYXIgXSk7XG5cdHJldHVybiBoZWFkZXI7XG59O1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHJlbmRlck1haW5NZW51KCkpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChoZWxwZXIucmVuZGVyRGl2KFwiXCIsW10sXCJwYWdlXCIpKTtcbi8vIGNvbnN0IHBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xuZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKXtcbiAgICAvLyBwYWdlRGl2LmlubmVySFRNTCA9ICcnO1xuICAgIG1haW5wYWdlLnJlbmRlcigpO1xufVxuZnVuY3Rpb24gcmVuZGVyTWVudVBhZ2UoKXtcbiAgICAvLyBwYWdlRGl2LmlubmVySFRNTCA9ICcnO1xuICAgbWVudXBhZ2UucmVuZGVyKCk7XG59XG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpe1xuICAgIC8vIHBhZ2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGFjdHBhZ2UucmVuZGVyKCk7XG59XG4vLyBmdW5jdGlvbiBldmVudExpc3RuZXJcbmNvbnN0IG1haW5QYWdlTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCBtZW51UGFnZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdFBhZ2VMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuXG5tYWluUGFnZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbmRlck1haW5QYWdlKTtcbm1lbnVQYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyTWVudVBhZ2UpO1xuY29udGFjdFBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJDb250YWN0UGFnZSk7XG5yZW5kZXJNYWluUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==