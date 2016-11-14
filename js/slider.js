var banner = $("#banner");
		var navbox = $("#banner .picnav");
		var pic = $("#banner .pic ul li");
		var but = $("#banner .but ul li");
		var picnav = $("#banner .picnav ul li");
		var t = null;
		var i = 0;
		banner.hover(function(){
			navbox.animate({bottom:0},500);
			clearInterval(t);
		},function(){
			navbox.animate({bottom:"-86px"},500);
			t = setInterval(function(){
			i++;
			if(i>4){
				i = 0;
			}
			auto();
			},3000);
		});
		picnav.mouseover(function(){
			i = $(this).index();
			auto();
		});
		function auto(){
			picnav.eq(i).addClass("first").siblings().removeClass("first");
			pic.eq(i).fadeIn().siblings().fadeOut();
			but.eq(i).addClass("first").siblings().removeClass("first");
		}
		t = setInterval(function(){
			i++;
			if(i>4){
				i = 0;
			}
			auto();
		},3000);