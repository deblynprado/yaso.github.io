jQuery.noConflict();
(function( $ ) {

	$(function() {

		$(window).scroll(function(){

			var thisPosition = $(this).scrollTop();

			if(thisPosition > 200 ){

				$("#header").addClass('fixed-header');

			} else if(thisPosition <= 200 ){

				$("#header").removeClass('fixed-header');

			}




		});




	});
})(jQuery);