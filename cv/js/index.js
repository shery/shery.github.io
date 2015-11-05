$(document).ready(function() {
	draw();
	$('li').hover(function() {
		var tooltip = $(this).data('tooltip');
		$(this).append('<div class="pp-tooltip left">' + tooltip + '</div>');
	},function() {
		$('.pp-tooltip').remove();
	});
	$(document).mousewheel($.throttle(3000,function(event, delta) {
	    if (delta > 0) {
	    	prewPage();
	    	
	    } else {
	    	nextPage();
	    };
	}));
	$('li').click(function() {
		var num = $(this).data('num');
		var section = $('.section');
		var active_num = $('.active').data('num');
		$('.current').removeClass('current');
		$('.active').removeClass('active');
		$(this).children().addClass('current');
		if ($('.leaving')) {
			if (num > active_num ) {
				section.slice(0,num).addClass('leaving');
			} else if (num == 0) {
				$('.leaving').removeClass('leaving');
			} else {
				section.eq(num - 1).nextAll().removeClass('leaving');
			};
			
		} else{
			section.slice(0,num).addClass('leaving');
		};
		section.eq(num).addClass('active');
	});
});