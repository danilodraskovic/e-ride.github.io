console.log("OK");

//Services

var serviceBoxIcon = ['class="fas fa-biking primaryColor"', 'class="fas fa-hard-hat primaryColor"', 'class="fas fa-calendar primaryColor"', 'class="fas fa-tags primaryColor"'];
var serviceBoxHeading = ['Various choices', 'Safety Number 1', 'Flexible schedule', 'Best prices'];
var serviceBoxText = ['We have prepared various types of vehicles', 'We also provide a pracitice course if needed', 'You can change what time you want to rent free of charge', 'Cheap, safe and reliable - that\'s us'];

var servicesRow = document.getElementById('servicesRow');

for (index in serviceBoxIcon) {
    servicesRow.innerHTML += `
        <div class="serviceBox">
            <i ${serviceBoxIcon[index]}></i>
            <h3 class="font-weight-bold">${serviceBoxHeading[index]}</h3>
            <p>${serviceBoxText[index]}</p>
        </div>
    `
}

//Creating blocks

var wrapper = document.getElementById("wrapper");

var subHeading = ['Join our <span>community</span> and meet new <span>friends</span>', 'The vehicles are in <span>good</span> shape and the equipment is <span>comfortable</span>', 'We provide <span>various</span> types of <span>vehicles</span> for you'];
var subText = ['There\'s no better way to meet new friends than a ride in the park together on a sunny day.', 'With rides in great shape and comfortable protective equipment for all ages we maintain a professional reputation.', 'We have provided various types of rides and equipment such as helmets , protective suits and pants from begginers to expert riders.'];
var subImg = ['img/friends.jpg', 'img/community.jpg', 'img/vehicles.jpg'];
var subAlt = ['Alt', 'Alt', 'Alt'];

var rows = document.querySelectorAll('.row');

for (let i = 0; i < subHeading.length; i++) {
    if (i == 1) {
        rows[i+4].innerHTML += `
            <div class="col-lg-6 col-12 p-0">
                <img class="w-100" src="${subImg[i]}" alt="${subAlt[i]}" />
            </div>
            <div class="col-lg-6 col-12 px-5 d-flex justify-content-center align-items-start flex-column">
                <h2 class="font-weight-normal text-left mb-3">${subHeading[i]}</h2>
                <p class="font-weight-light text-lfet mb-5">${subText[i]}</p>
            </div>
        `
    } else if (i != 1) {
        rows[i+4].innerHTML += `
            <div class="col-lg-6 col-12 px-5 d-flex justify-content-center align-items-start flex-column">
                <h2 class="font-weight-normal text-left mb-3">${subHeading[i]}</h2>
                <p class="font-weight-light text-left mb-5">${subText[i]}</p>
            </div>
            <div class="col-lg-6 col-12 p-0">
                <img class="w-100" src="${subImg[i]}" alt="${subAlt[i]}" />
            </div>
        `
    }
}

//Testimonials

var userImg = ['img/user1.png', 'img/user2.jpg', 'img/user3.jpg', 'img/user4.jpg', 'img/user5.jpg', 'img/user6.jpg', 'img/user7.jpg', 'img/user8.jpg', 'img/user9.jpg', ];
var userName = ['Graham Westbrook', 'Donald Lowell', 'Franklin Burns', 'Kira Wortham', 'Kaila Winter', 'Carry Holme', 'Zed Augustine', 'Terence Nielson', 'Brant Edison'];
var userJob = ['Conservationist', 'Fitness instructor', 'Mathematician', 'Editor', 'Lawyer', 'Park-keeper', 'Childminder', 'Fashion designer', 'Pest controller'];
var reviews = ['e-Ride is the best service of this type. Since I care about nature I try to drive as little as possible and e-Ride allows me to travel quickly without needing to start the car.', 'It has helped me tremendously over the past couple of years because I live far from the gym I work at. This way I save energy for my classes and I get there fast. Definitely recommend it', 'I love e-Ride! I am super into futuristic stuff and hoverboards and electric scooters are the closest thing to the future that we have. I hope they update their catalog as the new stuff comes out!', 'I can\'t count how many times I didn\' feel like running errands and e-Ride has completely changed that. Errands are now the best part of my day because I get to cruise through the city!', 'Some people would say that I am too old for electric rides but I say you are never too old for excitement! e-Ride has provided me with tons of relaxation from work.', 'There\'s no better feeling than riding through the park with wind in your hair as you listen to music. e-Ride has made my life so much easier and much more enjoyable.', 'The kids absolutely love e-Ride, especially the electric hoverboards. I practically just sit and watch them as they play for hours and hours. Definitely recommend e-Ride! They changed the game!', 'They have a big catalog of color choices so I take a different one everyday, it\'s kinda my daily routine. I recommended them to all my friends and ou should too. e-Ride ROCKS!', 'I have saved so much money on gas since I went electric and I couldn\'t have done it without e-Ride! They have made moving through the busy city of New York a breeze.'];
var testimonialsRow = document.getElementById('testimonialsRow');
var imgCounter = 0;

for (let i = 0; i < 3; i++) {
    let testimonialSlide = document.createElement('div');
    testimonialSlide.classList.add('slideItem');
    testimonialsRow.appendChild(testimonialSlide);
    for (let j = 0; j < 3; j++) {
        let testimonialBox = document.createElement('div');
        testimonialBox.classList.add('testimonialBox');
        testimonialBox.innerHTML = `<p>"</p>
                                    <p>${reviews[imgCounter]}</p>
                                    <div class="user-info d-flex justify-content-center align-items-center">
                                        <img src="${userImg[imgCounter]}" alt="User ${imgCounter}" />
                                        <p>${userName[imgCounter]}<br /><span>${userJob[imgCounter]}</span></p>
                                    </div>`
        testimonialSlide.appendChild(testimonialBox);
        imgCounter++;
    }
}

var controls = ['&#10094;', '&#10095;'];
var controlsClass = ['previous', 'next'];

for (let i = 0; i < controls.length; i++) {
    let sliderA = document.createElement('a');
    sliderA.classList.add(controlsClass[i]);
    sliderA.innerHTML = `${controls[i]}`;
    testimonialsRow.appendChild(sliderA);
}

//Change order of divs

var maxWidth = window.matchMedia('(max-width: 740px)');

function rearrange(maxWidth) {
    if (maxWidth.matches) {
        let content = document.querySelector('#wrapper > .row:nth-child(2) > div:nth-child(2)');
        let parent = content.parentNode;
        parent.insertBefore(content, parent.firstChild);
    }
}
  
rearrange(maxWidth);
maxWidth.addListener(rearrange);

//Slider

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.querySelector('.previous').addEventListener('click', () => {
    showSlides(slideIndex -= 1); 
})

document.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex += 1);
})

function showSlides(n) {
    let slides = document.getElementsByClassName('slideItem');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.classList.add('slide-display');
    }
    slides[slideIndex - 1].classList.remove('slide-display');   
}

//FAQ

var questions = document.querySelectorAll('.faq-question');
var answers = document.querySelectorAll('.faq-answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if (!(answers[i].classList.contains('show'))) {
            answers[i].classList.add('show');
        } else {
            answers[i].classList.remove('show');
        }
    })
}

var answersInner = ['We take cash at the facility but you can also use MasterCard and Visa on our website if that suits you better. In that case just show up with the confirmation and we will get you on your way.', 'You can cancel free of charge! However, you can only cancel for free within 5 hours of payment, after that you will have to pay 30%. The money will be returned to the same source as the payment, so if you rented through the website the money will be returned to your bank account.', 'Of course! We are here to help riders in any way we can, so you can just come by and rent any piece of protective equipment that you want.', 'To rent online just go to the Rent tab and follow instructions from there. It\'s really easy and will only take you a couple of minutes.'];

var answerText = document.querySelectorAll('.faq-answer p');
for (let i = 0; i < answersInner.length; i++) {
    answerText[i].textContent = answersInner[i];
}

//Span coloring

var spans = document.querySelectorAll('span');

for (let i = 0; i < spans.length; i++) {
    if (i % 2 == 0) {
        spans[i].setAttribute('class', 'primaryColor');
    } else if (i % 2 != 0) {
        spans[i].setAttribute('class', 'secondaryColor');
    }
}

//Dark mode

var moon = document.getElementById('darkMode');
var serviceBoxes = document.querySelectorAll('.serviceBox');
var pElements = document.querySelectorAll('p');
var h2Elements = document.querySelectorAll('h2');
var h3Elements = document.querySelectorAll('h3');
var testimonialBoxes = document.querySelectorAll('.testimonialBox');
var quotes = document.querySelectorAll('.testimonialBox p:first-child');
var userInfoSpan = document.querySelectorAll('.user-info span');

moon.addEventListener('click', () => {
    if (moon.classList.contains('far')) {
        moon.classList.remove('far')
        moon.classList.add('fas');
        document.querySelector('body').style.backgroundColor = '#121212';
        document.getElementById('services').style.backgroundColor = '#151515';
        document.getElementById('services').style.boxShadow = '10px 20px 30px #121212';
        for (let i = 0; i < serviceBoxes.length; i++) {
            serviceBoxes[i].style.backgroundColor = '#1a1a1a';
            serviceBoxes[i].style.boxShadow = '10px 20px 30px #121212';
        }
        for (let i = 0; i < pElements.length; i++) {
            pElements[i].style.color = '#FFF';
        }
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.color = '#FFF';
        }
        for (let i = 0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = '#FFF';
        }
        document.getElementById('testimonials').style.backgroundColor = '#151515';
        document.getElementById('testimonials').style.boxShadow = '10px 20px 30px #121212';
        for (let i = 0; i < testimonialBoxes.length; i++) {
            testimonialBoxes[i].style.backgroundColor = '#1a1a1a';
            testimonialBoxes[i].style.boxShadow = '10px 20px 30px #121212';
        }
        for (let i = 0; i < quotes.length; i++) {
            quotes[i].style.color = '#369FFF';
        }
        for (let i = 0; i < userInfoSpan.length; i++) {
            userInfoSpan[i].style.color = 'rgba(255, 255, 255, .5)';
        }
        document.getElementById('scroll-to-top').style.color = '#FFF';
    } else {
        moon.classList.remove('fas')
        moon.classList.add('far');
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.getElementById('services').style.backgroundColor = '#E8F5FF';
        document.getElementById('services').style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
        for (let i = 0; i < serviceBoxes.length; i++) {
            serviceBoxes[i].style.backgroundColor = '#FFF';
            serviceBoxes[i].style.boxShadow = '0px 8px 24px rgba(149, 157, 165, 0.2)';
        }
        for (let i = 0; i < pElements.length; i++) {
            pElements[i].style.color = '#000';
        }
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.color = '#000';
        }
        for (let i = 0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = '#000';
        }
        document.getElementById('testimonials').style.backgroundColor = '#E8F5FF';
        document.getElementById('testimonials').style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
        for (let i = 0; i < testimonialBoxes.length; i++) {
            testimonialBoxes[i].style.backgroundColor = '#FFF';
            testimonialBoxes[i].style.boxShadow = '0px 8px 24px rgba(149, 157, 165, 0.2)';
        }
        for (let i = 0; i < quotes.length; i++) {
            quotes[i].style.color = '#369FFF';
        }
        for (let i = 0; i < userInfoSpan.length; i++) {
            userInfoSpan[i].style.color = 'rgba(0, 0, 0, .5)';
        }
        document.getElementById('scroll-to-top').style.color = '#000';
    }
})




