const helper = require('./helper');
import chettinadChicken from "./chettinad-chicken-curry.jpg";
import dosa from "./dosa.jpg";
import idli from "./idli-vada-sambar.jpg";
import appe from "./appe.jpg";
const renderMenuItem = (item,image,content) => {
    let div = helper.renderDiv("",["menu-item"]);
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
    maincontent.classList.remove('main');
    maincontent.classList.remove('contact');
    maincontent.classList.add('menu');
    //Title 
    let menuH2 = helper.renderElement({element:"h2"});
    menuH2.textContent = "Some of our standout items to try."
    //Menu Items - contain Ideally 2 in a row and will be centered.
    let divMenu = helper.renderDiv("",["menu-item-display"]);
    let divMenuRow1 = helper.renderDiv("",["menu-row"]);
    let menuItem1 = renderMenuItem("Idli Vada Sambar",idli,"Our Signature Item! The combination of the ultra soft rice cakes called idli with the contrasting crunch of the vada dipped in a slightly sweet and tangy sambar and mellow chutney is to die for!")
    let menuItem2 = renderMenuItem("Dosa/Masala Dosa",dosa,"Listed as one of the world's most delicious foods, a masala dosa never fails to impress!");
    divMenuRow1.appendChild(menuItem1);
    divMenuRow1.appendChild(menuItem2);

    let divMenuRow2 = helper.renderDiv("",["menu-row"]);
    let menuItem3 = renderMenuItem("Chicken Chettinad",chettinadChicken,"Full of flavour and bold masalas, this dish will floor your family and guests. A gorgeous melange of onions, tomatoes, cinnamon sticks, cloves, cumin, curry leaves and a rich coconut-y paste.");
    let menuItem4 = renderMenuItem("Appe",appe,"A variation on the traditional Idli, filled with chopped vegetables and pan fried to perfection, crispy on the outside and soft on the inside. Worth a shot for those health freaks out there!");
    divMenuRow2.appendChild(menuItem3);
    divMenuRow2.appendChild(menuItem4);
    divMenu.appendChild(divMenuRow1);
    divMenu.appendChild(divMenuRow2);
    maincontent.appendChild(menuH2);
    maincontent.appendChild(divMenu);
}

export  {render};