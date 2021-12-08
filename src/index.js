import * as helper from './helper.js';
import restaurantimg from './random-restaurant.jpeg';
let div = helper.renderDiv("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste libero dolorum facilis? Eius dolorem cum sapiente ipsam? Architecto, quis ad similique repudiandae sed tenetur nesciunt quibusdam maiores, dolores excepturi vero?");
let h1 = helper.renderHeader("Resto Social");
let img = helper.renderImage(restaurantimg);
const contentDiv = document.getElementById("content");
contentDiv.appendChild(img);
contentDiv.appendChild(h1);
contentDiv.appendChild(div);
