$(document).ready(function() {
	draw();
	$('li').hover(function() {
		var tooltip = $(this).data('tooltip');
		$(this).append('<div class="pp-tooltip left">' + tooltip + '</div>');
	},function() {
		$('.pp-tooltip').remove();
	});
	$(document).mousewheel(function(event, delta) {
	    if (delta > 0) {
	    	prewPage();
	    } else {
	    	nextPage();
	    };
	});
	$('li').click(function() {
		var num = $(this).data('num');
		var section = $('.section');
		$('.current').removeClass('current');
		$('.active').removeClass('active');
		$(this).children().addClass('current');
		if ($('.leaving')) {
			if (true) {} else{};
			$('.leaving').removeClass('leaving');
			section.slice(0,num).addClass('leaving');
		} else{
			section.slice(0,num).addClass('leaving');
		};
		section.eq(num).addClass('active');
	});
});