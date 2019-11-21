$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})

//HAMBURGE BUTTON NAV
//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar');
const menuNav = document.querySelector('.navbar-nav');
const menuBranding = document.querySelector('.navbar-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navItems.forEach(item => item.addEventListener('click', toggleMenu));
function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}

// //SMOOTH SCROLL
// $('.navbar a').click(function(e) {
//     if(this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 900);
//     }
// });

//IMAGE GALLERIES
const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('.gallery-imgs img');
const opacity = 0.4;

//set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change current image to source image
    currentImg.src = e.target.src;

    //Add fade in css class to current image
    currentImg.classList.add('fade-in');
    //Remove fade-in class
    setTimeout(() => currentImg.classList.remove('fade-in'), 500)

    //set opacity of clicked image
    e.target.style.opacity = opacity;
}

//scroll magic 
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, {x:200, opacity: 0});
tl.from('span', 1, { width: 0}, "=-.5");
tl.from('#img1', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#img2', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  // console.log(tl.progress());
}