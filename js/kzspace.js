$(document).ready(function(){
	
	//logo的变化
	$(".logo").hover(function(){
		$("div.row span").css("display","inline-block");
		$("div.row span").animate({width:"250px"},"normal");
	},function(){
		$("div.row span").animate({width:0},"normal","linear",function(){
			$("div.row span").css("display","none");
			});
	});
	
	//导航条nav中li的变化
	$(".nav a").hover(function(){
		$(this).animate({paddingTop:"0px"},100);
	},function(){
		$(this).animate({paddingTop:"6px"},500);
	});
	
	
	//导航控制页面滑动
	var plate = "#home"
	$("a[id^='btn']").click(function(){
		aaa=$(this).attr("href");
		plate = aaa;
		if(jQuery.browser.safari) {
			$("body").animate({scrollTop: $(aaa).offset().top-62},"slow");	
		}
		else{
			$("html").animate({scrollTop: $(aaa).offset().top-62},"slow");
		}
		return false;
	});
	
	//设置元素高度变化的（方法）
	var page = 5;
	function setHeight(){
		var changeHeight = $(window).height() - $("header").height();
		var changeWidth = $(window).width();
		var pageArray = [[0,0],[changeWidth,0],[changeWidth * 2,0],[0,changeHeight],[changeWidth,changeHeight],[changeWidth*2,changeHeight],[0,changeHeight*2],[changeWidth,changeHeight*2],[changeWidth*2,changeHeight*2]]
		//console.log(changeWidth + "   -   " +changeHeight)
		//console.log(pageArray[page-1][0] + "  -   " + pageArray[page-1][1])
		$(".workpage section div.change").height(changeHeight);
		$(".workpage section div.change").width(changeWidth);
		$(".cxx").height($(window).height() - $("header").height());
		$("div.conbox").css("margin-left", ($(".workpage section div.change").width()-1160)/2);
		$(".workpage section").css("top",-pageArray[page-1][1]);
		$(".workpage section").css("left",-pageArray[page-1][0]);
		if(jQuery.browser.safari) {
			$("body").scrollTop($(plate).offset().top-62);	
		}
		else{
			$("html").scrollTop($(plate).offset().top-62);
		}
	}
	setHeight();
	
	$(window).resize(function(){
  		setHeight();
	});	
	
	
	//iphone移动
	
	var iphonePage = 1
	var iphonelong = $(".iphone .appimg").length;	
	
	
	$(".contrl a.contrlbut").each(function(i){
		
   		$(this).click(function(){
			iphonePage = i+1
			console.log($("#app"+iphonePage))
				$(".iphone .appimg").animate({opacity:0},"slow");
				$(".contrl a.contrlbut").removeClass("dianon");
				$(".contrl a.contrlbut").addClass("dianoff");
				$("#app"+iphonePage).animate({opacity:1},"slow");
				$("#but"+iphonePage).removeClass("dianoff");
				$("#but"+iphonePage).addClass("dianon");		
		});
	});		
		
	//imac移动
	var i = 1
	var weblong = $(".webpage").length;	
	$(".web").css("width",weblong * 598)
	
	function next(){
		if (i >= weblong){
			i=1
		}
		else {
			i++
		}
		webmove(i-1)
	};
	
	function prev(){
		if (i <= 1){
			i=weblong
		}
		else {
			i--
		}
		webmove(i-1)
	};
	
	
	function webmove(s){
		$(".web").animate({left:(-598*s)+"px"},500);
	};
	
	$("#next").click(function(){
		next()
	});
	$("#prev").click(function(){
		prev()
	});
	
	
	$(".webpage").hover(function(){
		$(".visit").css({display:"block"},500);
	},function(){
		$(".visit").css({display:"none"},500);
	});
	
	
	//poster页面的效果
	$(".shape").hover(function(){
		$(".zhezhao[abc!=1]").animate({opacity:1},"fast");
	},function(){
		$(".zhezhao").animate({opacity:0},"fast");
	});
	
	$(".zhezhao").hover(function(){
		$(this).attr("abc", 1);
		$(this).animate({opacity:0},"fast");
	},function(){
		$(this).attr("abc", 0);
		$(this).css("opacity",1);
	});
	
	
	// $(".submit").click(function(){
	// 	alert("Sorry！Function being debugged. My Email:goodluck@kellerzeus.com")
		
	// });
	
	
	
	//控制work页面的整体滑动
	
	var changebgId = ["floor","","graphicbg","websitebg","","logobg","interfacebg","","posterbg"]
	function hideOtherPage(){
		$(".workpage section div.change").css("opacity",0);
		$(".workpage section div.change").eq(page-1).css("opacity",1);
	}
	function showOtherPage(){
		$(".workpage section div.change").css("opacity",1);
	}
	
	function back1(){
		showOtherPage();
		//console.log($("#"+changebgId[page-1]))
		$("#"+changebgId[page-1]).animate({opacity:0},"slow",function(){$(".workpage section").animate({left:-$(".workpage section div.change").width(),top:-$(".workpage section div.change").height()},500,function(){hideOtherPage()})});
		page = 5
	}
	
	$(".workpage section div a.back").click(function(){
		back1()
	});
	
	$(".frame a#hex1").click(function(){
		showOtherPage();
  		$(".workpage section").animate({top:0,left:0},"slow",function(){
			$("#floor").animate({opacity:1},"slow")
			hideOtherPage()
		});
		page = 1
	});
	
	
	$(".frame a#hex4").click(function(){
		showOtherPage();
		$(".workpage section").animate({left:0},"slow",function(){
			$("#websitebg").animate({opacity:1},"slow")
			hideOtherPage()
		});
		page = 4
	});
	
	
	$(".frame a#hex6").click(function(){
		showOtherPage();
  		$(".workpage section").animate({left:-$(".workpage section div.change").width()*2},"slow",function(){
			$("#logobg").animate({opacity:1},"slow")
			hideOtherPage()
		});
		page = 6
	});
	
	
	$(".frame a#hex3").click(function(){
		showOtherPage();
  		$(".workpage section").animate({top:0,left:-$(".workpage section div.change").width()*2},"slow",function(){
			$("#graphicbg").animate({opacity:1},"slow")
			hideOtherPage()
		});
		page = 3
	});
	
		
	$(".frame a#hex7").click(function(){
		showOtherPage();
  		$(".workpage section").animate({top:-$(".workpage section div.change").height()*2,left:0},"slow",function(){
			$("#interfacebg").animate({opacity:1},"slow",hideOtherPage())
		});
		page = 7
	});
	
	
	$(".frame a#hex9").click(function(){
		showOtherPage();
  		$(".workpage section").animate({top:-$(".workpage section div.change").height()*2,left:-$(".workpage section div.change").width()*2},"slow",function(){
			$("#posterbg").animate({opacity:1},"slow",hideOtherPage())
		});
		page = 9
	});
	
	
});