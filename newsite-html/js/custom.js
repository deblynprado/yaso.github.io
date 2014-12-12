jQuery.noConflict();
(function( $ ) {
	$(function() {

		$('.section').scrollNav();

		$(window).scroll(function(){

			var thisPosition = $(this).scrollTop();

			if(thisPosition > 200 ){

				$("#header").addClass('fixed-header');
				$("#logo > img").attr('src', 'img/logo2.png');
				$('.scroll-nav__wrapper').show();

			} else if(thisPosition <= 200 ){

				$("#header").removeClass('fixed-header');
				$("#logo > img").attr('src', 'img/logo.png');
				$('.scroll-nav__wrapper').hide();

			}




		});




	});
})(jQuery);
