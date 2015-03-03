$(function () {


	var max_height = $('#wrapper').height();

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
			'bottom':(max_height - sort_top)+'px',
			'left': sort_left+'%',
		});

		$("#wrapper").append(cell_model);

	}


	for (var i = 15; i >= 0; i--) {

		var sort_cell = getRandomInt(1,10),
			sort_left = getRandomInt(1,20);
			sort_top = getRandomInt(max_height-1000, max_height),
			sort_speed = 10-(sort_left/20);

		create_cell(sort_cell, sort_top, sort_left, sort_speed);

	};

	setInterval(function() {

		$.each($('.parallax-el'), function(i, o){
			$(o).css({
				'bottom': '+='+$(o).attr('data-speed')/2+'px'
			});
		});

	}, 10);


});