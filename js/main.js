console.log("OK");

//Wide dynamic menu

var nav = document.getElementById('navLinks');
var linkNames = new Array('Home', 'About', 'Rent', 'Contact', 'Author');
var linkHrefs = new Array('index.html', 'about.html', 'rent.html', 'contact.html', 'https://danilodraskovic.github.io/');
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

//Dark mode

var moon = document.getElementById('darkMode');

moon.addEventListener('click', () => {
    if (moon.classList.contains('far')) {
        moon.classList.remove('far')
        moon.classList.add('fas');
    } else {
        moon.classList.remove('fas')
        moon.classList.add('far');
    }
})

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

