console.log("OK");

//Filters

$(document).ready(function() {
    $('#filterOptions li a').click(function() {
      var ourClass = $(this).attr('class');
      $('#filterOptions li').removeClass('active');
      $(this).parent().addClass('active');
      if(ourClass == 'all') {
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
'The Ninebot KickScooter F30 is feature rich yet cost effective and offers everything you need in one product: an extended 18.6-mile range, a top speed of 15.5 mph, large 10” tires, foldable design and Bluetooth security lock to keep your Kickscooter safe. Comes in different colors'];
var productSrc = ['img/bike1.png', 'img/bike2.png', 'img/bike3.png', 'img/bike4.png', 'img/hover1.png', 'img/hover2.png', 'img/hover3.png', 'img/hover4.png', 'img/scooter1.png', 'img/scooter2.png', 'img/scooter3.png', 'img/scooter4.png'];

var productBoxes = document.querySelectorAll('.product-box');

for (let i = 0; i < productBoxes.length; i++) {
    let productImg = document.createElement('div');
    productImg.classList.add('product-img');
    productImg.innerHTML = `<img src="${productSrc[i]}" alt="" />`;
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.innerHTML = `<h3>${productNames[i]}</h3>
                            <p>${productDesc[i]}</p>
                            <button role="button">Rent</button>`;
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