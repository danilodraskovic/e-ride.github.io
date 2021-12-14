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