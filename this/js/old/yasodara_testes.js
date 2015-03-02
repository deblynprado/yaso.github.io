$(function () {

   	var max_height = $('#wrapper').height();
   	
   	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomArbitrary(min, max) {
    	return Math.random() * (max - min) + min;
	}

   	function create_cell(sort_cell, sort_bottom, sort_left, sort_speed){

   		var cell_model = $('<div />').addClass('parallax-el').html('<img src="images/parallax-elements/cell'+sort_cell+'.png" />')
   		cell_model.attr('data-bottom', sort_bottom);
   		cell_model.attr('data-speed', sort_speed);
   		cell_model.css({
   			'left': sort_left+'%',
   			'bottom' : sort_bottom+'px'
   		});

   		$("#wrapper").prepend(cell_model);

   	}



   	for (var i = 1; i >= 0; i--) {

   		var sort_cell = getRandomInt(1,10),
	   		sort_left = getRandomInt(1,25),
	   		sort_speed = 5-(sort_left/25),
	   		sort_bottom = getRandomInt(20,500);

   		create_cell(sort_cell, sort_bottom, sort_left, sort_speed);

   	};


   	$(window).scroll(function() {

   		$.each($('.parallax-el'), function(i, obj) {

   			var speed 			= ($(obj).attr('data-speed')) / 5,
   				bottomDistance 	= $(obj).attr('data-bottom'),
	   			windowOffset 	= $(window).scrollTop();

	   		var posy = $(obj).css('bottom') + speed;
			
   			$(obj).css({
   				'bottom': '+'+posy+'px'
   			});


   		});

   	}); 

});