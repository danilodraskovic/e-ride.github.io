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
        for (let i=0; i<pElements.length; i++) {
            pElements[i].style.color = '#FFF';
        }
        document.querySelector('#author-landing').style.boxShadow = '10px 20px 30px #121212';
    } else {
        moon.classList.remove('fas')
        moon.classList.add('far');
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.getElementById('scroll-to-top').style.color = '#000';
        document.querySelector('h1').style.color = '#000';
        for (let i=0; i<pElements.length; i++) {
            pElements[i].style.color = '#000';
        }
        document.querySelector('#author-landing').style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
    }
})