function screenClass() {
    if($(window).innerWidth() > 991) {
        $('.students-carousel, .studybay-carousel').removeClass('owl-carousel');
    } else {
        $('.students-carousel, .studybay-carousel').addClass('owl-carousel');
            var owl2 = $('.students-carousel, .studybay-carousel');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                nav: false,
                dots: false,
                smartSpeed: 500,
                autoplayTimeout: 20000,
                autoplayHoverPause: false,
                responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
			}
        });
    }
}


$(window).bind('resize',function(){
    screenClass();
});

$(function() {

	screenClass();

});


$(function() {
	$('.tutors-carousel').owlCarousel({
		items: 3,
		loop: true,
		margin: 15,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
});
