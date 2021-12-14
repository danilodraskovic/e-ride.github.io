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
const checkBox = document.getElementById('agree');
const submit = document.getElementById('submit');
var errorMessages = document.querySelectorAll('#form span');

var nameApprove = false;
var emailApprove = false;
var selectApprove = false;
var messageApprove = false;
var checkBoxApprove = false;

var nameRegex = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Check name

function checkName () {
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
}

fullName.addEventListener('focus', () => {
    fullName.classList.add('fail');
});

fullName.addEventListener('blur', checkName);

//Check email

function checkEmail () {
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
}

email.addEventListener('focus', () => {
    email.classList.add('fail');
});

email.addEventListener('blur', checkEmail);

//Subject check

function checkSubject () {
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
}

subject.addEventListener('blur', checkSubject);

//Message check

function checkMessage () {
    if (message.value < 1) {
        errorMessages[7].textContent = "Field can't be empty.";
        message.classList.add('fail');
        messageApprove = false;
    } else {
        errorMessages[7].textContent = "";
        message.classList.remove('fail');
        message.classList.add('success');
        messageApprove = true;
    }
}

message.addEventListener('blur', checkMessage);

//Checkbox check

function checkCheckbox () {
    if (checkBox.checked) {
        checkBoxApprove = true;
        errorMessages[9].textContent = "";
    } else {
        errorMessages[9].textContent = "You have to agree in order to send.";
    }
}

//Submit check

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkSubject();
    checkMessage();
    checkCheckbox();
    if (nameApprove && emailApprove && selectApprove && messageApprove && checkBoxApprove){
        alert("Successfully sent!");
        setTimeout("location.reload(true);", 0);
    }
});

//Dark mode

var moon = document.getElementById('darkMode');
var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('input');
var options = document.querySelectorAll('option');

moon.addEventListener('click', () => {
    if (moon.classList.contains('far')) {
        moon.classList.remove('far')
        moon.classList.add('fas');
        document.querySelector('body').style.backgroundColor = '#121212';
        document.getElementById('scroll-to-top').style.color = '#FFF';
        document.querySelector('h1').style.color = '#FFF';
        document.querySelector('p').style.color = '#FFF';
        document.getElementById('subject').style.backgroundColor = '#151515';
        document.querySelector('textarea').style.backgroundColor = '#151515';
        for (let i=0; i<labels.length; i++) {
            labels[i].style.color = '#FFF';
        }
        for (let i=0; i<options.length; i++) {
            options[i].style.color = '#FFF';
        }
        for (let i=0; i<inputs.length; i++) {
            inputs[i].style.backgroundColor = '#151515';
        }
        document.querySelector('iframe').setAttribute('filter', 'invert(90%)');
    } else {
        moon.classList.remove('fas')
        moon.classList.add('far');
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.getElementById('scroll-to-top').style.color = '#000';
        document.querySelector('h1').style.color = '#000';
        document.querySelector('p').style.color = '#FFF';
        document.getElementById('subject').style.backgroundColor = '#FFF';
        document.querySelector('textarea').style.backgroundColor = '#FFF';
        for (let i=0; i<labels.length; i++) {
            labels[i].style.color = '#000';
        }
        for (let i=0; i<options.length; i++) {
            options[i].style.color = '#000';
        }
        for (let i=0; i<inputs.length; i++) {
            inputs[i].style.backgroundColor = '#FFF';
        }
    }
})


