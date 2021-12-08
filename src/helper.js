const renderImage = (src) => {
    let img = new Image();
    img.src = src;
    return img;
}
const renderDiv= (content,classlist=[])=>{
    let div = document.createElement("div");
    div.textContent = content;
    if (classlist.length === 0) return div;
    else{
        classlist.forEach(element => {
            div.classList.add(element);
        });
    }
}
const renderHeader = (content,classlist = []) =>{
    let h1 = document.createElement("h1");
    h1.textContent = content;
    if (classlist.length === 0) return h1;
    else{
        classlist.forEach(element => {
            h1.classList.add(element);
        });
    }
}

export {renderDiv,renderImage,renderHeader};