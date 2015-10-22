$(document).ready(function(){
	var dropdown1 = $("#dropdown1");
	var items = ['Choose hero', 'Spider Man', 'Wolverine','Captain America','X-Men','Crocodile'];
	var selected = 'Crocodile';

	dropdown1.html('<a class="tag" href="#"></a><a class="cli" href="#">∨</a><ul class="list" style="display: none;"></ul>');
	var list = $(".list");
	var tag = $(".tag");
	
	tag.text(selected);

	appendHtml = '';
	for (i in items) {
		var itemName = items[i];
			// var $li = $("<li>" + "<a>" + itemName + "</a>" + "</li>")	
		var className = '';
		if (itemName === selected) {
			className = 'class="selected"';
		}	
		appendHtml += "<li " + className + ">" + "<a>" + itemName + "</a>" + "</li>";
	}
	list.append(appendHtml);
	// var selectValue = function (value){

	// 	list.innerHTML = '';
		// for (i in items) {
		// 	var itemName = items[i];
		// 	var item = document.createElement('li');
		// 	if (itemName == value) {
		// 		item.setAttribute('class', 'selected');
		// 	}
		// 	item.innerHTML = '<a>' + itemName + '</a>';
		// 	list.appendChild(item);
	// 	}
	// };

 	// selectValue(selected);
 	tag.click(function(event){
 		list.fadeToggle("slow");
 		event.stopPropagation();
 	});
 	$(".cli").click(function(event){
 		list.fadeToggle("slow");
 		event.stopPropagation();
 	});
 	$("li").click(function(){
 		$(".selected").attr("class","");
 		$(this).attr("class","selected");
 		tag.text($(this).text());
 	});
 	$(document).click(function(){
 		list.fadeOut("slow");
 	});

});

