$(function () {

   	var max_height = $('#wrapper').height();
   	var last_screen_pos = max_height - $(window).height();
   	var wh = $(window).height();

   	console.log(last_screen_pos);
   	
   	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomArbitrary(min, max) {
    	return Math.random() * (max - min) + min;
	}

   	function create_cell(sort_cell, sort_left, max_pos_y){

   		var sort_int = getRandomInt(-400,0),
   			sort_end_pos = getRandomInt(10, max_pos_y),
   			start_point = last_screen_pos + sort_int,
   			end_point = last_screen_pos,
   			opacity = scale = getRandomArbitrary(0.5,1),
   			blur = getRandomInt(0,10);

   		var cell_model = $('<div />').addClass('parallax-el').html('<img style="-webkit-filter: blur('+blur+'px); filter: blur('+blur+'px); -ms-transform: scale('+scale+'); -webkit-transform: scale('+scale+'); transform: scale('+scale+');" src="images/parallax-elements/cell'+sort_cell+'.png" />')
   		
   		cell_model.attr('data-0', 'bottom:0px');
   		cell_model.attr('data-'+end_point,'bottom:'+sort_end_pos+'px');
   		cell_model.css({
   			'left':sort_left+'%',
   			'opacity': opacity
   		});
   		
   		$("#wrapper").prepend(cell_model);

   	}



   	for (var i = 15; i >= 0; i--) {

   		var sort_cell = getRandomInt(1,10),
	   		sort_left = getRandomInt(1,25);
   		create_cell(sort_cell, sort_left, (2*wh));

   	};


   	for (var i = 10; i >= 0; i--) {

   		var sort_cell = getRandomInt(1,10),
	   		sort_left = getRandomInt(25,50);
   		create_cell(sort_cell, sort_left, 300);

   	};

   	for (var i = 8; i >= 0; i--) {

   		var sort_cell = getRandomInt(1,10),
	   		sort_left = getRandomInt(50,100);
   		create_cell(sort_cell, sort_left, 800);

   	};

   	var s = skrollr.init({forceHeight:false});


});
