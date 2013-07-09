(function() {
  $(".post-box").hover(function(){
    $(this).find(".post-thumbnail").css("border-radius", "1em");
  }, function(){
    $(this).find(".post-thumbnail").css("border-radius", "150px");
  });
  $(".post-box").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
  });
})();
