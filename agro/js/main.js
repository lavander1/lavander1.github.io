/*
** Preloader.
*/
window.onload = function(){ 
	setTimeout(function () {
		$('#preloader').fadeOut(400, function () {
			$('header nav').animate({
				'opacity': '1'},
				1000, function() {
					$('header .logo, header h1').animate({
					'opacity': '1'},
					750);
			});
		});
	}, 1000);
}

jQuery(document).ready(function($) {
	/*
	** Lazy Load.
	*/
	var lazyLoadInstance = new LazyLoad({
	    elements_selector: ".lazy"
	});


	/*
	** Header Toggler.
	*/
	$('.header__toggler__btn').click(function(event) {
		if ($('.header__nav').is(':visible')) {
			$(this).removeClass('active');
			$('.header__nav').fadeOut(400, function() {
				if ($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});
		} else {
			$(this).addClass('active');
			$('.header__nav').fadeIn(400);
		}
	});


	/*
	** Flexslider.
	*/
	$('.flexslider').flexslider({
		animation: "slide",
	});


	/*
	**Animation
	*/
	$.fn.animated = function() {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").waypoint(function(dir) {
				if (dir === "down") {
					ths.animate({
						'opacity': '1'},
						750);
				};
			}, {
				offset: "75%"
			});
		});
	};
	$(".animShow").animated();
	
});
