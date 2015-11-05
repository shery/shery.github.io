(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

var nextPage = function() {
	var li = $('li');
	var section = $('.section');
	var num = parseInt($('.active').data('num')) + 1;
	$('.active').removeClass('active');
	if (num < 5) {
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
		var current = li.eq(4);
		$('.current').removeClass('current');
		current.children().addClass('current');
		section.slice(0,4).addClass('leaving');
		section.eq(4).addClass('active');
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
