const helper = require('./helper');
import restaurantFrontImage from './restuarant-front-page.jpg';
const render = () => {
    let mainContentDiv = helper.renderDiv();
    
    
    // Div With image 
    let div1 = helper.renderDiv();
    let img1 = helper.renderImage(restaurantFrontImage);
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

export {render};