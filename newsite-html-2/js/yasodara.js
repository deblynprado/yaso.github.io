$(function () {

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomArbitrary(min, max) {
    	return Math.random() * (max - min) + min;
	}


	function create_cell(sort_cell, sort_top, sort_left, sort_speed){

		var cell_model = $('<div />').addClass('parallax-el').html('<img src="images/parallax-elements/cell'+sort_cell+'.png" />')
		cell_model.attr('data-top', sort_top);
		cell_model.attr('data-speed', sort_speed);
		cell_model.css({
			'left': sort_left+'%',
		});

		$("body").prepend(cell_model);

	}


	for (var i = 15; i >= 0; i--) {

		var sort_cell = getRandomInt(1,10),
			sort_left = getRandomInt(1,20);
			sort_top = getRandomInt(2800, 3400),
			sort_speed = 5-(sort_left/25);

		create_cell(sort_cell, sort_top, sort_left, sort_speed);

	};


	for (var i = 4; i >= 0; i--) {

		var sort_cell = getRandomInt(1,10),
			sort_top = getRandomInt(2200, 2350),
			sort_speed = getRandomArbitrary(1,2),
			sort_left = getRandomInt(40,50);

		create_cell(sort_cell, sort_top, sort_left, sort_speed);

	};


	for (var i = 5; i >= 0; i--) {

		var sort_cell = getRandomInt(1,10),
			sort_left = getRandomInt(65,100);
			sort_top = getRandomInt(1500, 2700),
			sort_speed = 2*(sort_left/25);

		create_cell(sort_cell, sort_top, sort_left, sort_speed);

		
	};

	for (var i = 4; i >= 0; i--) {

		var sort_cell = getRandomInt(1,10),
			sort_left = getRandomInt(65,100);
			sort_top = getRandomInt(2200, 2500),
			sort_speed = getRandomInt(1,2);

		create_cell(sort_cell, sort_top, sort_left, sort_speed);
	
	};



	$.each($('.parallax-el'), function(i, obj) {

		$(this).css({
		
			'top': $(this).attr('data-top')+'px'

		});

	});


    $(window).scroll(function() {
		
		$.each($('.parallax-el'), function(i, obj) {

			var speed 			= ($(obj).attr('data-speed')) / 5,
				currentOffset 	= $(obj).attr('data-top'),
				windowOffset 	= $(window).scrollTop();

			var posy = currentOffset-(windowOffset * speed);

			$(obj).css({
				'top': posy+'px'
			});

		
		});

	}); 

});