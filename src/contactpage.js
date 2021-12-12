

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

const render = () =>{
    let maincontent = helper.renderDiv();
    let form = renderForm();
    maincontent.appendChild(form);
    return form;
}

export {render};