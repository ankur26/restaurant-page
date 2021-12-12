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

export {renderList, renderElement,renderDiv, renderImage, renderHeader, renderNavMenu, renderH1 };
