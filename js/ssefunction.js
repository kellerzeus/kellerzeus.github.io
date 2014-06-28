$(document).ready(function(){
$(".extend").click(function(){
    $(this).parent(".player").siblings(".info").slideToggle("fast");
    
  });

$(".subpitch").click(function(){
    $(".pop").css("display","block");
    
  });

$(".pop img").click(function(){
    $(".pop").css("display","none");
    
  });

});