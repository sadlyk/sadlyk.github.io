$(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    width:90,
    responsiveClass:true,
    dots: false,
    navText: ["<img src=\"img/arrow-left.svg\">","<img src=\"img/arrow-right.svg\">"],
    responsive:{
        320:{
            items:1,
            nav:false
        },
        480:{
            items:2,
            nav:true
        },
        800:{
            items:3,
            nav:true
        },
        1100:{
            items:3,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:true
        }
    }
	})
	$('.header').parallax({imageSrc: 'img/header-bg.png'});
	$('.about-shoes').parallax({imageSrc: 'img/second-bg.jpg'});
});
