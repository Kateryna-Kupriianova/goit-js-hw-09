const form = document.querySelector('.feedback-form');
const labels = document.querySelectorAll('.feedback-form label');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const button = document.querySelector('button');

labels.forEach(label => {
    label.classList.add('form-label');
});
emailInput.classList.add('form-input');
messageTextarea.classList.add('form-textarea');
button.classList.add('form-button');



let formData = {
    email: "",
    message: ""
};


function addToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function fillFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email.trim();
        messageTextarea.value = formData.message.trim();
    }
}


form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    addToLocalStorage();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    formData.email = formData.email.trim();
    formData.message = formData.message.trim();

    if (!formData.email || !formData.message) {
        alert('Please fill in all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        form.reset();
    }

     
});


window.addEventListener('load', fillFromLocalStorage);
