var nextPage = function() {
	var li = $('li');
	var section = $('.section');
	var num = parseInt($('.active').data('num')) + 1;
	$('.active').removeClass('active');
	if (num < 6) {
		var current = li.eq(num);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(num).addClass('active');
		section.eq(num - 1 ).addClass('leaving');

	} else{
		var current = li.eq(0);
		$('.current').removeClass('current');
		$('.leaving').removeClass('leaving');
		current.children().addClass('current');
		section.eq(0).addClass('active');
	};
};
var prewPage = function() {
	var li = $('li');
	var section = $('.section');
	var num = parseInt($('.active').data('num')) - 1;
	$('.active').removeClass('active');
	if (num > -1) {
		var current = li.eq(num);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.eq(num).removeClass('leaving');
		section.eq(num).addClass('active');
	} else{
		var current = li.eq(5);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.slice(0,5).addClass('leaving');
		section.eq(5).addClass('active');
	};
};
var draw = function() {
	var canvas = document.getElementById("avatar");
   	if (canvas.getContext) {
	    var avatar = canvas.getContext("2d");
	    var img = new Image();
	    img.onload = function() {
	    	avatar.drawImage(img,0,0);
	    };
	    img.src = "images/avatar.png";
   	} 
};
