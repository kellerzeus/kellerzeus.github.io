$(document).ready(function(){
$(".extend").click(function(){
    $(this).parent(".player").siblings(".info").slideToggle("fast");
    
  });


$(".subpitch").click(function(){
	$(".popblack").css("display","block");
    $(".pop").css("display","block");
    
  });

$(".pop img").click(function(){
	$(".popblack").css("display","none");
    $(".pop").css("display","none");
    
  });
  
//倒计时插件

var targetTime = Math.round((new Date('07/06/2014 10:00:00')).getTime()/1000);
var	nowTime = Math.round((new Date()).getTime()/1000);

var myTime = targetTime - nowTime;
var intDiff = parseInt(myTime);//倒计时总秒数量

function timer(intDiff){
	window.setInterval(function(){
	var day=0,
		hour=0,
		minute=0,
		second=0;//时间默认值		
	if(intDiff > 0){
		day = Math.floor(intDiff / (60 * 60 * 24));
		hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
		minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
		second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
	}
	if (minute <= 9) minute = '0' + minute;
	if (second <= 9) second = '0' + second;
	$('#day_show').html(day+"天");
	$('#hour_show').html('<s id="h"></s>'+hour+'时');
	$('#minute_show').html('<s></s>'+minute+'分');
	$('#second_show').html('<s></s>'+second+'秒');
	intDiff--;
	}, 1000);
} 

$(function(){
	timer(intDiff);
});	

});