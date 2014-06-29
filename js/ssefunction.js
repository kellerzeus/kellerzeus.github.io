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

});