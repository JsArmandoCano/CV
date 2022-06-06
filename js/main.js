// ----------- JavaScript Puro -----------
window.onload = function() {
    var pre = document.getElementById('preloader');
    pre.style.visibility = 'hidden';
    pre.style.opacity = '0';
}

//Para Seccion de Header
window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//Arriba
window.addEventListener("scroll", function (){
    var scroll = document.querySelector(".scrolltop");
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Para Seleccionar idioma
const flecha = document.querySelector('.flecha');
flecha.addEventListener('click',() => {
    document.querySelector('.select').classList.toggle('activo');
});


// ----------- JQuery -----------
// Card 1
$(document).ready(function() {
    $('.more').click(function() {
        $('.back1').addClass('active')
        $('.front1').removeClass('active')
    })
    $('.go-back').click(function() {
        $('.back1').removeClass('active')
        $('.front1').addClass('active')
    })
})
// Card 2
$(document).ready(function() {
    $('.more2').click(function() {
        $('.back2').addClass('active')
        $('.front2').removeClass('active')
    })
    $('.go-back2').click(function() {
        $('.back2').removeClass('active')
        $('.front2').addClass('active')
    })
})
// Card 3
$(document).ready(function() {
    $('.more3').click(function() {
        $('.back3').addClass('active')
        $('.front3').removeClass('active')
    })
    $('.go-back3').click(function() {
        $('.back3').removeClass('active')
        $('.front3').addClass('active')
    })
})

//Para Programas
$(document).ready(function(){
    $('.programa').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'programa1') {
            $('.info-programa').show('1000');
        }
        else {
            $('.info-programa').not('.'+value).hide('1000');
            $('.info-programa').filter('.'+value).show('1000');
        }
    })
})

$('.programa').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
}) 

// Para Cambiar de idioma
$.getJSON('js/lang.json', function(json) {
    if(!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "es");
    }
    let def = localStorage.getItem("lang");
    $('.lang').each(function(index, value) {
        $(this).text(json[def][$(this).attr('key')]);
    });

    $('.traducir').click(function() {
        let lang = $(this).attr('id');
        localStorage.setItem("lang", lang);
        $('.lang').each(function(index, value) {
            $(this).text(json[lang][$(this).attr('key')]);
        });
    });
});

 
// ----------- GSAP -----------
let tween = gsap.from('.mi-info', {
    duration: .3,
    y: -200,
    scale: 0,
    stagger: 0.5,
    delay: 2
});


// ----------- ScrollReveal -----------
window.sr = ScrollReveal();

sr.reveal('.exp1', {
    duration: 2000,
    origin: 'rigth',
    distance: '-200px',
    delay: 1000
})

sr.reveal('.exp2', {
    duration: 2000,
    origin: 'left',
    distance: '-200px',
    delay: 1000
})

sr.reveal('.card1', {
    duration: 2000,
    origin: 'top',
    distance: '-200px',
    delay: 1000
})

sr.reveal('.card2', {
    duration: 2000,
    origin: 'top',
    distance: '-400px',
    delay: 1000
})

sr.reveal('.card3', {
    duration: 2000,
    origin: 'top',
    distance: '-600px',
    delay: 1000
})

sr.reveal('.español', {
    duration: 2000,
    origin: 'right',
    distance: '-200px',
})

sr.reveal('.ingles', {
    duration: 2000,
    origin: 'left',
    distance: '-200px'
})

sr.reveal('.img-skill', {
    duration: 2000,
    origin: 'bottom',
    distance: '-200px'
})

sr.reveal('.programa', {
    duration: 2000,
    origin: 'bottom',
    distance: '-300px'
})

sr.reveal('.hexagon', {
    duration: 2000,
    origin: 'right',
    distance: '-300px'
})

// ----------- Swiper Slider -----------
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });