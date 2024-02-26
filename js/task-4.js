const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 

        const formElements = event.currentTarget.elements;
        const email = formElements.email.value.trim();
        const password = formElements.password.value.trim();
        const info = {
            email: email,
            password: password,
        };
    
    if (email === "" || password === "") {
        alert(`All form fields must be filled in`);
    } else {
        console.log(info);
        event.currentTarget.reset(); 
    };
    }