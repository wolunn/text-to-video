(function($){
	'use script';
	$(window).on('load', function(event) {
        $('#loading').delay(500).fadeOut(500);
    });
	// WOW JS
	new WOW().init();
	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
	// MinCart
	$('.mini-cart a').on('click', function(){
        $('.off_canvars_overlay, .mini-cart-area').addClass('active')
    });
    $('.mini-cart-close,.off_canvars_overlay').on('click', function(){
        $('.mini-cart-area,.off_canvars_overlay').removeClass('active')
    });

	// /*---slider activation---*/
    var $TrendingProSlider = $('.trending-product-slider');
    if($TrendingProSlider.length > 0){
        $TrendingProSlider.owlCarousel({
            loop: true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 3,
            nav:false,
            margin:30,
            smartSpeed: 1500,
           	responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
    }
	// /*---slider activation---*/
    var $TestimonialSlider = $('.testimonial-full');
    if($TestimonialSlider.length > 0){
        $TestimonialSlider.owlCarousel({
            loop: true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 3,
            nav:false,
            margin:30,
            smartSpeed: 1500,
           	responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                767: {
                    items: 1
                },
                992: {
                    items: 2
                },
            }
        });
    }
	// /*---slider activation---*/
    var $CreativeBundSlider = $('.creative-bundle-thumb');
    if($CreativeBundSlider.length > 0){
        $CreativeBundSlider.owlCarousel({
            loop: true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 10000,
            items: 1,
            nav:false,
            margin:30,
            smartSpeed: 1500,
        });
    }
    // Product
    var $LPMIXitUP = $('.l-product-recent-theme');
    if($LPMIXitUP.length > 0){
		var mixer = mixitup('.l-product-recent-theme');
		var mixer = mixitup('.portF');
		var mixer = mixitup('.portF', {
			selectors: {
				target: '.blog-item'
			},
			animation: {
				duration: 100
			}
		});
	}
	// Counter
    var $CounterUp = $('.counter');
    if($CounterUp.length > 0){
		$('.counter').counterUp({
	        delay: 10,
	        time: 2000
	    });
	}
	// Video Popup
	$('.video-btn-a').magnificPopup({
	  	type: 'iframe', 	
	});
	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});

}(jQuery));