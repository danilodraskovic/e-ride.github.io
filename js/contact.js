console.log("OK");

//Options

var select = document.getElementById('subject');
var subjects = ['Choose...', 'Technical question', 'Suggestion', 'Availability in your region'];
var subjectValues = ['choose', 'tech', 'suggestion', 'availability'];

for (let i = 0; i < subjects.length; i++) {
    let option = document.createElement('option');
    option.append(subjects[i]);
    option.setAttribute('value', subjectValues[i]);
    select.appendChild(option);
}

//Form validation

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const checkBox = document.getElementById('gridCheck');
const submit = document.getElementById('submit');
var errorMessages = document.querySelectorAll('#form span');

var nameApprove = false;
var emailApprove = false;
var selectApprove = false;
var messageApprove = false;

var nameRegex = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Check name

fullName.addEventListener('focus', () => {
    fullName.classList.add('fail');
});

fullName.addEventListener('blur', () => {
    if (fullName.value.match(nameRegex)) {
        fullName.classList.remove('fail')
        fullName.classList.add('success');
        errorMessages[1].textContent = "";
        nameApprove = true;
    } else if (fullName.value.length < 1) {
        errorMessages[1].textContent = "Field can't be empty.";
        nameApprove = false;
    } else {
        errorMessages[1].textContent = "Change the format of the name.";
        nameApprove = false;
    }
})

//Check email

email.addEventListener('focus', () => {
    email.classList.add('fail');
});

email.addEventListener('blur', () => {
    if (email.value.match(emailRegex)) {
        email.classList.remove('fail')
        email.classList.add('success');
        errorMessages[3].textContent = "";
        emailApprove = true;
    } else if (email.value.length < 1) {
        errorMessages[3].textContent = "Field can't be empty.";
        emailApprove = false;
    } else {
        errorMessages[3].textContent = "Change the format of the email.";
        emailApprove = false;
    }
})

//Subject check

subject.addEventListener('blur', () => {
    let selectedValue = subject.options[subject.selectedIndex].value;
    if (selectedValue == "choose") {
        subject.classList.add('fail');
        errorMessages[5].textContent = "Please choose the subject of your question";
        selectApprove = false;
    } else {
        subject.classList.remove('fail');
        subject.classList.add('success');
        errorMessages[5].textContent = "";
        selectApprove = true;
    }
})

//Message check

message.addEventListener('blur', () => {
    if (message.value < 1) {
        errorMessages[7].textContent = "Field can't be empty.";
        message.classList.add('fail');
        messageApprove = false;
    } else {
        errorMessages[7].textContent = "";
        message.classList.remove('fail');
        message.classList.add('success');
        messageApprove = true;
        let approve = nameApprove && emailApprove && selectApprove && messageApprove;
        if (approve) {
            submit.removeAttribute('disabled');
            submit.addEventListener('click', () => {
                alert('Uspesno poslata poruka');
            })
        }
    }
})



