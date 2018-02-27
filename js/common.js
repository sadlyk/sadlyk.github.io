$(function() {

	$('.owl-carousel2').owlCarousel({
    loop:true,
    margin: 0,
    width: 0,
    responsiveClass: true,
    dots: false,
    nav:false,
    responsive:{
        320:{
            items:1,
            margin: 0
        },
        480:{
            items:1,
            margin: 0
        },
        800:{
            items:2,
            nav:false,
            margin: 30
        },
        1200:{
            items:3,
            nav:false,
            margin: 30
        },
        1300:{
            items:3,
            nav:false,
            loop:true,
            margin: 60
        }
    }
	});
	var owl = $('.owl-carousel1');
	owl.owlCarousel({
    margin: 0,
    width: 0,
    responsiveClass: true,
    dots: false,
    center:true,
    loop:true,
    nav:true,
    navText: ["<img src=\"img/shape-copy.svg\">","<img src=\"img/shape-copy-2.svg\">"],
    responsive:{
        320:{
        		items:1,
        		stagePadding:80,
            margin: 0
        },
        480:{
            margin: 0
        },
        800:{
        		items:3,
        		stagePadding:50
        },
        900:{
        		items:3,
            nav:true,
            loop:true,
            stagePadding:100
        },
        1200:{
        		items:3,
            nav:true,
            loop:true,
            stagePadding:300
        },
        1500:{
        		items:3,
            nav:true,
            loop:true,
            stagePadding:350
        },
        1600:{
        		items:3,
            nav:true,
            loop:true,
            stagePadding:430
        }
    }
	});
});
