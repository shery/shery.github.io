var rms = {
	ui : {
		//全屏
		fullscreen : function(){
			if(document.body.webkitRequestFullScreen){
				document.body.webkitRequestFullScreen();
			}else if(document.body.mozRequestFullScreen){
				document.body.mozRequestFullScreen();
			}else if(document.body.requestFullScreen){
				document.body.requestFullscreen();
			}else{
				console.log("浏览器不支持全屏API或已被禁用");
			}
		},
		//退出全屏
		exitfullscreen : function(){
			if(document.webkitCancelFullScreen){
				document.webkitCancelFullScreen();
			}else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
			}else if(document.cancelFullScreen){
				document.cancelFullScreen();
			}else if(document.exitFullscreen){
				document.exitFullscreen();
			}else{
				console.log("浏览器不支持全屏API或已被禁用");
			}
		},
		//Select返回值
		selectreturn : function(obj){
			var request = {
				'id'	: '',
				'value' : ''
			};
			request.id = obj.attr("data-id");
			request.value = obj.text();
			return request;
		},
		//nav展开
		navunfold : function(obj){
			$('.nav').animate({width:'220px'},100);
			$('.main').animate({marginLeft:'220px'},100);
			$('.foot').animate({paddingLeft:'235px'},100);
			obj.find('em').attr({class:"flexbtn iconfont icon-arrowleft1",style:""});
			return 1;
		},
		//nav收起
		navfold : function(obj){
			$('.searchresult dt').click();
			$('.nav').find("[class='active']").attr("class","");
			$('.nav ul').find("ul").attr("style","display:none;");
			$('.nav').animate({width:'48px'},100);
			$('.main').animate({marginLeft:'48px'},100);
			$('.foot').animate({paddingLeft:'63px'},100);
			obj.find('em').attr({class:"flexbtn iconfont icon-arrowright1",style:"margin:0;padding:5px 0;width:48px;border-radius:0;text-align:center;font-size:22px;"});
			return 0;
		},
		//更改iframe链接
		changeurl : function(obj){
		   $("#iframeid").attr("src",$(obj).attr("href"));
		   return false;
		},
		//初始化导航
		initnav : function(obj,json){
			var nav1 = '',nav2 = '',nav3 = '';
			for (var i = 0; i < json.length; i++) {
				var navurl  = '',
					unfold  = 'icon-arrowright',
					onclick = '';
				if(json[i].href != ''){
					navurl  = 'href="'+json[i].href+'"';
					unfold  = '';
					onclick = 'onclick="return rms.ui.changeurl(this)"';
				}
				var active = '';
				if(i == 0){
					active = 'class="active"';
					$("#iframeid").attr("src",json[0].href);
				}
				nav1 += '<li '+active+'>\
					<a '+navurl+' '+onclick+'>\
						<i class="iconfont '+unfold+'"></i>\
						<em class="iconfont '+json[i].icon+'"></em>\
						<span>'+json[i].title+'</span>\
					</a>';
				if(json[i].href == ''){	
					nav2 = '<ul>';
					for(var j = 0; j < json[i].child.length; j++){
						navurl  = '';
						unfold  = 'icon-arrowright';
						if(json[i].child[j].href != ''){
							navurl  = 'href="'+json[i].child[j].href+'"';
							unfold  = '';
							onclick = 'onclick="return rms.ui.changeurl(this)"';
						}
						nav2 += '<li>\
							<a '+navurl+' '+onclick+'>\
								<i class="iconfont '+unfold+'"></i>\
								<span>'+json[i].child[j].title+'</span>\
							</a>';
						if(json[i].child[j].href == ''){
							nav3 = '<ul>';
							for(var k = 0; k < json[i].child[j].child.length; k++){
								nav3 += '<li>\
									<a href="'+json[i].child[j].child[k].href+'" onclick="return rms.ui.changeurl(this)">\
										<em>●</em><span>'+json[i].child[j].child[k].title+'</span>\
									</a></li>';
							}
							nav3 += '</ul>';
							nav2 += nav3;
						}
						nav2 += '</li>';
					}
					nav2 += '</ul>';
					nav1 += nav2;
				}
				nav1 += '</li>';
			};
			obj.html(nav1);
		},
		//刷新内容
		refresh : function(){
			$('#iframeid').attr("src",$('#iframeid').attr("src"));
		},
		//清除搜索结果
		cleansearch : function(obj){
			$(obj).parents('.searchresult').find('dd').slideToggle(200,function(){
				$(obj).remove();
			})
		}
	}
}










































































