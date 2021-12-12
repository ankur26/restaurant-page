const helper = require('./helper');


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

export {render};