$(function() {
  $(".inner-nav li").on("click", function(){
    var oldId = $(".inner-nav").find(".active").attr("id")

    $(".inner-nav").find(".active").removeClass("active");
    $(this).addClass("active");

    var id = $(this).attr("id")

    if (id !== oldId) {
      $("." + id + '-section').removeClass("hidden");
      $("." + oldId + '-section').addClass("hidden");
    }
  });

})
