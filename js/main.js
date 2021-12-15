console.log("OK");

//Wide dynamic menu

var nav = document.getElementById('navLinks');
var linkNames = new Array('Home', 'About', 'Rent', 'Contact', 'Author');
var linkHrefs = new Array('index.html', 'about.html', 'rent.html', 'contact.html', 'author.html');
for (let i = 0; i < linkNames.length; i++) {
	let navLi = document.createElement('li');
	let navA = document.createElement('a');
	let navName = document.createTextNode(linkNames[i]);
	navA.setAttribute('href', linkHrefs[i]);
	navA.classList.add('navLink');
	navA.append(navName);
	navLi.append(navA);
	nav.append(navLi);
}

//Narrow dynamic menu

var topMenuLinks = document.getElementById('topMenuLinks');
var topMenuLinkNames = new Array('Home', 'About', 'Rent', 'Contact', 'Author');
var topMenuLinkHrefs = new Array('index.html', 'about.html', 'rent.html', 'contact.html', 'author.html');
for (let i = 0; i < topMenuLinkNames.length; i++) {
	let topMenuLi = document.createElement('li');
	let topMenuA = document.createElement('a');
	let topMenuName = document.createTextNode(topMenuLinkNames[i]);
	topMenuA.setAttribute('href', topMenuLinkHrefs[i]);
	topMenuA.classList.add('navLink');
	topMenuA.append(topMenuName);
	topMenuLi.append(topMenuA);
	topMenuLinks.append(topMenuLi);
}

//Hamburger menu

var counter = 0;

function hamburgerOpen() {
	let topMenu = document.getElementById('topMenu');
	let hamburger = document.getElementById('hamburger');
	if (counter % 2 == 0) {
		hamburger.classList.add('open');
		topMenu.classList.add('topMenuOpen');
		counter++;
	} else {
		hamburger.classList.remove('open');
		topMenu.classList.remove('topMenuOpen');
		counter++;
	}
}

//Footer nav

var footerNav = document.querySelector('footer .row > div:nth-child(2) > ul:first-child');
var footerLinkNames = new Array('Documentation', 'Sitemap');
var footerLinkHrefs = new Array('documentation.pdf', 'sitemap.xml');
for (let i = 0; i < footerLinkNames.length; i++) {
	let footerNavLi = document.createElement('li');
	let footerNavA = document.createElement('a');
	let footerNavName = document.createTextNode(footerLinkNames[i]);
	footerNavA.setAttribute('href', footerLinkHrefs[i]);
	footerNavA.classList.add('footerNavLink');
	footerNavA.setAttribute('target', '_blank');
	footerNavA.append(footerNavName);
	footerNavLi.append(footerNavA);
	footerNav.append(footerNavLi);
}

//Footer socials

var footerSocials = document.querySelector('footer .row > div:nth-child(2) ul:nth-child(2)');
var socials = new Array('fab fa-facebook-f', 'fab fa-instagram', 'fab fa-linkedin-in', 'fab fa-twitter');
var socialHrefs = new Array('https://www.facebook.com/danilodraskovic23', 'https://www.instagram.com/danilodraskovic/', 'https://www.linkedin.com/in/danilo-dra%C5%A1kovi%C4%87-2281b31a7/', 'https://twitter.com/danilodraskovix');
for (let i = 0; i < socials.length; i++) {
	let socialLi = document.createElement('li');
	let socialA = document.createElement('a');
	let socialI = document.createElement('i');
	socialA.setAttribute('href', socialHrefs[i]);
	socialA.setAttribute('target', '_blank');
	socialI.setAttribute('class', socials[i]);
	socialA.append(socialI);
	socialLi.append(socialA);
	footerSocials.appendChild(socialLi);
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

//Scroll animation

var tooNarrow = false;

$(window).resize(function() {
	tooNarrow = $(window).width() <= 740
}).trigger('resize');

(function($) {
	$.fn.visible = function(partial) {
		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);


var win = $(window);
var allMods = $(".module");
if (!tooNarrow) {
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("already-visible");
		}
	});
	win.scroll(function(event) {
		allMods.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("come-in");
			}
		});
	});
}

//Back to top

$(document).ready(function() {
	var scrollTop = $("#scroll-to-top");
	$(window).scroll(function() {
		var topPos = $(this).scrollTop();
		if (topPos > 100) {
			$(scrollTop).css("opacity", "1");
		} else {
			$(scrollTop).css("opacity", "0");
		}
	});
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 100);
		return false;
	});
})

if (window.location.pathname == '/e-ride.github.io/index.html' || window.location.pathname == '/e-ride.github.io/') {
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
	var subAlt = ['Friends', 'Rides', 'Choice'];

	var rows = document.querySelectorAll('.row');

	for (let i = 0; i < subHeading.length; i++) {
		if (i == 1) {
			rows[i + 4].innerHTML += `
            <div class="col-lg-6 col-12 p-0">
                <img class="w-100" src="${subImg[i]}" alt="${subAlt[i]}" />
            </div>
            <div class="col-lg-6 col-12 px-5 d-flex justify-content-center align-items-start flex-column">
                <h2 class="font-weight-normal text-left mb-3">${subHeading[i]}</h2>
                <p class="font-weight-light text-lfet mb-5">${subText[i]}</p>
            </div>
        `
		} else if (i != 1) {
			rows[i + 4].innerHTML += `
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
	var reviews = ['e-Ride is the best service of this type. Since I care about nature I try to drive as little as possible and e-Ride allows me to travel quickly without needing to start the car.', 'It has helped me tremendously over the past couple of years because I live far from the gym I work at. This way I save energy for my classes and I get there fast. Definitely recommend it.', 'I love e-Ride! I am super into futuristic stuff and hoverboards and electric scooters are the closest thing to the future that we have. I hope they update their catalog as the new stuff comes out!', 'I can\'t count how many times I didn\' feel like running errands and e-Ride has completely changed that. Errands are now the best part of my day because I get to cruise through the city!', 'Some people would say that I am too old for electric rides but I say you are never too old for excitement! e-Ride has provided me with tons of relaxation from work.', 'There\'s no better feeling than riding through the park with wind in your hair as you listen to music. e-Ride has made my life so much easier and much more enjoyable.', 'The kids absolutely love e-Ride, especially the electric hoverboards. I practically just sit and watch them as they play for hours and hours. Definitely recommend e-Ride! They changed the game!', 'They have a big catalog of color choices so I take a different one everyday, it\'s kinda my daily routine. I recommended them to all my friends and ou should too. e-Ride ROCKS!', 'I have saved so much money on gas since I went electric and I couldn\'t have done it without e-Ride! They have made moving through the busy city of New York a breeze.'];
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
}

if (window.location.pathname == '/e-ride.github.io/about.html') {
	console.log("OK");

	//Dark mode

	var moon = document.getElementById('darkMode');

	moon.addEventListener('click', () => {
		if (moon.classList.contains('far')) {
			moon.classList.remove('far')
			moon.classList.add('fas');
			document.querySelector('body').style.backgroundColor = '#121212';
			document.getElementById('scroll-to-top').style.color = '#FFF';
			document.querySelector('#about-wrapper .row:nth-child(2) p').style.color = '#FFF';
		} else {
			moon.classList.remove('fas')
			moon.classList.add('far');
			document.querySelector('body').style.backgroundColor = '#FFF';
			document.getElementById('scroll-to-top').style.color = '#000';
			document.querySelector('#about-wrapper .row:nth-child(2) p').style.color = '#000';
		}
	})
}

if (window.location.pathname == '/e-ride.github.io/rent.html') {
	console.log("OK");

	//Filters

	$(document).ready(function() {
		$('#filterOptions li a').click(function() {
			var ourClass = $(this).attr('class');
			$('#filterOptions li').removeClass('active');
			$(this).parent().addClass('active');
			if (ourClass == 'all') {
				$('#productList').children('div.item').show();
			} else {
				$('#productList').children('div:not(.' + ourClass + ')').hide();
				$('#productList').children('div.' + ourClass).show();
			}
			return false;
		});
	});


	//Creating blocks

	var productsWrapper = document.getElementById('productList');
	for (let i = 0; i < 12; i++) {
		let productBox = document.createElement('div');
		productBox.classList.add('col-lg-4', 'col-md-6', 'col-12', 'p-0', 'product-box', 'item');
		productList.appendChild(productBox);
	}

	var productNames = ['Render 8.0', 'Solution Hybrid 2.0', 'ZR Team Hybrid 6.0', 'THRON 6.9', 'Jetson Impact Extreme', 'Ride Swft Blaze', ' Hover-1 Blast', 'Hover-1 I-200', 'Hover-1 - Alpha', 'Hover-1 - Aviator', 'Ninebot KickScooter E45', 'Scooter 4'];
	var productDesc = ['The RENDER world is already starting at a high level with the model 8.0. The basis is the striking carbon frame, which beautifully houses the large 625 battery and at the same time provides stiffness with its “wing” between the top and down tube and houses the upper shock mount.',
		'For all technology fans and performance lovers, we offer this season\'s SOLUTION HYBRID 2.0 CX 500. The heart of this model is also the brand new Bosch Performance Line CX engine of the fourth generation. One of our best performance bikes that won\'t let you down.',
		'If you want to ride the most powerful Bosch CX drive ever, the best choice is the ZR Team Hybrid 6.0 CX 500. With 250 watts of power, up to 85Nm torque and 340% support, you always have full power on board on the road and can even include long rides with steep climbs in your tour planning.',
		'The full suspension E-Mountainbike Focus Thron² 6.9 with Kiox display is equipped with the new powerful and dynamic Bosch Performance CX drive. The integrated battery is easy to remove and has a capacity of 625 Wh. The high-quality 130 mm F.O.L.D. chassis consists of suspension fork.',
		'Make an impact when you head out around town with the Jetson Impact Extreme Terrain Hoverboard. The full spectrum LED light-up wheels are sure to dazzle; while Bluetooth pairing and onboard speaker will let you bring the beats. The lights will illuminate as they sync to your tunes.',
		'Cruise the neighborhood in style with the Blaze Self Balancing Hoverboard by Ride Swft. This hoverboard\'s self-balancing technology makes for a smooth and safe ride. By ensuring stability as the rider gets on or off the board, riders develop confidence and the ability to ride with joy.',
		'Have a blast with the Hover-1 blast hoverboard. This fast, powerful, and versatile hoverboard shines bright with integrated led lighting. Not to mention the dual 160 W motors get you to wherever you want to go quickly. With a maximum ride range of 3 miles, you can zip back and forth at warp speed.',
		'If you\'re looking for a fast, convenient, and easily rideable Hoverboard, the I-200 is always a good choice. Featuring a powerful 320 W motor, this hoverboard can reach speeds of up to 7 mph and support a weight of 160 pounds, making it the perfect board for kids.',
		'Enjoy getting around the city with this Hover-1 Alpha electric folding scooter. The built-in Bluetooth speaker lets you stream your favorite playlists from your smartphone, and the LED headlight provides visibility at night. This Hover-1 Alpha electric folding scooter runs at up to 18 mph.',
		'Take to the skies with the Hover-1 Aviator eScooter. With a fun and bright iridescent and metallic finish inspired by modern aviation, this folding electric scooter gives you everything you need. Featuring an electric throttle and brake system, a vibrant LCD and large battery, what more could you ask for?',
		'Ninebot KickScooter E45-Exceptional Design, Extraordinary Journeys. The Ninebot KickScooter E45 inherits the classic design of the Ninebot eKickscooter series and features integrated molding technology and a metal frame. More expensive option but better durability.',
		'The Ninebot KickScooter F30 is feature rich yet cost effective and offers everything you need in one product: an extended 18.6-mile range, a top speed of 15.5 mph, large 10” tires, foldable design and Bluetooth security lock to keep your Kickscooter safe. Comes in different colors'
	];
	var productSrc = ['img/bike1.png', 'img/bike2.png', 'img/bike3.png', 'img/bike4.png', 'img/hover1.png', 'img/hover2.png', 'img/hover3.png', 'img/hover4.png', 'img/scooter1.png', 'img/scooter2.png', 'img/scooter3.png', 'img/scooter4.png'];

	var productBoxes = document.querySelectorAll('.product-box');
	var imgCounter = 0;

	for (let i = 0; i < productBoxes.length; i++) {
		imgCounter++;
		let productImg = document.createElement('div');
		productImg.classList.add('product-img');
		productImg.innerHTML = `<img src="${productSrc[i]}" alt="Product ${imgCounter}" />`;
		let productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		productInfo.innerHTML = `<h3>${productNames[i]}</h3>
                          <p>${productDesc[i]}</p>
                          <button class="rentBtn" role="button">Rent</button>`;
		productBoxes[i].appendChild(productImg);
		productBoxes[i].appendChild(productInfo);
		if (i < 4) {
			productBoxes[i].classList.add('category-bikes');
		} else if (i > 3 && i < 8) {
			productBoxes[i].classList.add('category-hovers');
		} else {
			productBoxes[i].classList.add('category-scooters');
		}
	}

	var rentButtons = document.querySelectorAll('.rentBtn');
	var rentModal = document.getElementById('modalOpen');
	for (i = 0; i < rentButtons.length; i++) {
		rentButtons[i].addEventListener('click', () => {
			rentModal.classList.add('modalOpen');
			setTimeout(() => {
				window.location.reload(true);
			}, 1000);
		})
	}

	//Dark mode

	var moon = document.getElementById('darkMode');
	var pElements = document.querySelectorAll('p');
	var h3Elements = document.querySelectorAll('h3');
	var productInfo = document.querySelectorAll('.product-info');
	moon.addEventListener('click', () => {
		if (moon.classList.contains('far')) {
			moon.classList.remove('far')
			moon.classList.add('fas');
			document.querySelector('body').style.backgroundColor = '#121212';
			document.getElementById('scroll-to-top').style.color = '#FFF';
			document.querySelector('h1').style.color = '#FFF';
			for (let i = 0; i < pElements.length; i++) {
				pElements[i].style.color = '#FFF';
			}
			for (let i = 0; i < h3Elements.length; i++) {
				h3Elements[i].style.color = '#FFF';
			}
			for (let i = 0; i < productInfo.length; i++) {
				productInfo[i].style.backgroundColor = '#151515';
			}
		} else {
			moon.classList.remove('fas')
			moon.classList.add('far');
			document.querySelector('body').style.backgroundColor = '#FFF';
			document.getElementById('scroll-to-top').style.color = '#000';
			document.querySelector('h1').style.color = '#000';
			for (let i = 0; i < pElements.length; i++) {
				pElements[i].style.color = '#000';
			}
			for (let i = 0; i < h3Elements.length; i++) {
				h3Elements[i].style.color = '#000';
			}
			for (let i = 0; i < productInfo.length; i++) {
				productInfo[i].style.backgroundColor = '#FFF';
			}
		}
	})
}

if (window.location.pathname == '/e-ride.github.io/contact.html') {
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

	function checkName() {
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

	function checkEmail() {
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

	function checkSubject() {
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

	function checkMessage() {
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

	function checkCheckbox() {
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
		if (nameApprove && emailApprove && selectApprove && messageApprove && checkBoxApprove) {
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
			for (let i = 0; i < labels.length; i++) {
				labels[i].style.color = '#FFF';
			}
			for (let i = 0; i < options.length; i++) {
				options[i].style.color = '#FFF';
			}
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].style.backgroundColor = '#151515';
			}
			document.querySelector('iframe').setAttribute('filter', 'invert(90%)');
		} else {
			moon.classList.remove('fas')
			moon.classList.add('far');
			document.querySelector('body').style.backgroundColor = '#FFF';
			document.getElementById('scroll-to-top').style.color = '#000';
			document.querySelector('h1').style.color = '#000';
			document.querySelector('p').style.color = '#000';
			document.getElementById('subject').style.backgroundColor = '#FFF';
			document.querySelector('textarea').style.backgroundColor = '#FFF';
			for (let i = 0; i < labels.length; i++) {
				labels[i].style.color = '#000';
			}
			for (let i = 0; i < options.length; i++) {
				options[i].style.color = '#000';
			}
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].style.backgroundColor = '#FFF';
			}
		}
	})
}

if (window.location.pathname == '/e-ride.github.io/author.html') {
	console.log("OK");

	//Dark mode

	var moon = document.getElementById('darkMode');
	var pElements = document.querySelectorAll('p');

	moon.addEventListener('click', () => {
		if (moon.classList.contains('far')) {
			moon.classList.remove('far')
			moon.classList.add('fas');
			document.querySelector('body').style.backgroundColor = '#121212';
			document.getElementById('scroll-to-top').style.color = '#FFF';
			document.querySelector('h1').style.color = '#FFF';
			for (let i = 0; i < pElements.length; i++) {
				pElements[i].style.color = '#FFF';
			}
			document.querySelector('#author-landing').style.boxShadow = '10px 20px 30px #121212';
		} else {
			moon.classList.remove('fas')
			moon.classList.add('far');
			document.querySelector('body').style.backgroundColor = '#FFF';
			document.getElementById('scroll-to-top').style.color = '#000';
			document.querySelector('h1').style.color = '#000';
			for (let i = 0; i < pElements.length; i++) {
				pElements[i].style.color = '#000';
			}
			document.querySelector('#author-landing').style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
		}
	})
}