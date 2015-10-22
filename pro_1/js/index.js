$(document).ready(function (){
	var isPause = false;
	$('.IconItem').mouseover(function (event){
		clearTimeout(t);
		mod.removeClass("on");
		mod.eq($(event.currentTarget).index()).addClass("on");
		var isPause = true;
		return isPause;
	});
	$('.IconItem').mouseout(function (event){
		var isPause = false;
		var i = $('.on').index();
		var timer = function (){
			t = setTimeout(function(){
				i += 1;
				if (i >= 7) {
					i = 0;
				}
				mod.removeClass("on");
				mod.eq(i).addClass("on");
				timer();
			},3000);	
		};
		timer();
		return isPause;
	});
	var mod = $('.case_mod_desc_c');
	$('.IconItem').click(function (event){
		var num = $(event.currentTarget).index();
		mod.removeClass("on");
		mod.eq(num).addClass("on");
	});
	if (!isPause) {
		var i = 0;
		var timer = function (){
			t = setTimeout(function(){
				i += 1;
				if (i >= 7) {
					i = 0;
				}
				mod.removeClass("on");
				mod.eq(i).addClass("on");
				timer();
			},3000);	
		};
		timer();
	}	
});