import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit)

populateText();

function onInputChange(evt) {
    const feedbackForm = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackForm));
}


function onFormSubmit(evt) {
    evt.preventDefault();
    const feedbackForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(feedbackForm);
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function populateText() {
    const savedText = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedText) {
        refs.form.elements.email.value = savedText.email;
        refs.form.elements.message.value = savedText.message;
    };
}