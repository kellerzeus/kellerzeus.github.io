$(document).ready(function(){
$(".extend").click(function(){
    $(this).parent(".player").siblings(".info").slideToggle("fast");
  });
});