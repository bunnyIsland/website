window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

gsap.set('.main', {
    position: 'fixed',
    background: '#000',
    width: '1920',
    maxWidth: '1920',
    height: '1080',
    top: 50,
    left: '50%',
    x: '-50%'
})
gsap.set('.scrollDist', {
    width: '100%',
    height: '200%'
})
gsap.timeline({
        scrollTrigger: {
            trigger: '.scrollDist',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0
        }
    })
    .fromTo('.sky', {
        y: 0
    }, {
        y: -200
    }, 0)
    .fromTo('.cloud1', {
        y: 100
    }, {
        y: -800
    }, 0)
    .fromTo('.cloud2', {
        y: -150
    }, {
        y: -500
    }, 0)
    .fromTo('.cloud3', {
        y: -50
    }, {
        y: -650
    }, 0)
    .fromTo('.mountBg', {
        y: -70
    }, {
        y: -100
    }, 0)
    .fromTo('.mountMg', {
        y: -70
    }, {
        y: -250
    }, 0)
    .fromTo('.mountFg', {
        y: -70
    }, {
        y: -600
    }, 0)
    .fromTo('.mountFg2', {
        y: 0
    }, {
        y: -1000
    }, 0)



const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
    navLink.classList.toggle('box-shadow');
});


$(window).on("resize", function() {
    navLink.classList.add("hide");
    navLink.classList.remove("box-shadow");
});


$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
    $("html, body").scrollTop(0);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > $('body').height() / 3) {
        $('#learnMore').fadeTo(500, 1);
    }

    if ($(window).scrollTop() > $('body').height() / 2 + (($('body').height() / 4) * 2)) {
        $('#learnMore2').fadeTo(500, 1);
    }
    if ($(window).scrollTop() > $('body').height() / 2 + (($('body').height() / 4) * 3)) {
        $('#learnMore3').fadeTo(500, 1);
    }
    if ($(window).scrollTop() > $('body').height() / 2 + (($('body').height() / 4) * 4)) {
        $('#learnMore4').fadeTo(500, 1);
    }

    if ($(window).scrollTop() > $('body').height() / 2 + (($('body').height() / 4) * 6)) {
        $('#learnMore5').fadeTo(500, 1);
    }
});



$('#learnMore').click(function() {


});

addEventListener("load", () => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden",
        count = slides.length;
    nextSlide();

    function nextSlide() {
        slides[(index++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 1000);
    }
});


var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

/* Check the location of each element */
$('.content').each(function(i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();

    if (bottom_of_object > bottom_of_window) {
        $(this).addClass('hidden');
    }
});


$(window).scroll(function() {
    /* Check the location of each element hidden */
    $('.hidden').each(function(i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fadeIn it */
        if (bottom_of_window > bottom_of_object) {
            $(this).animate({
                'opacity': '1'
            }, 700);
        }
    });
});