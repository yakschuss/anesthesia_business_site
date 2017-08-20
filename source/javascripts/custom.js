$(function() {
  $(".inner-nav li").on("click", function(){
    $(".inner-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
})
