window.isMenuOpen = false;

window.scrollTimer = null;

$(window).scroll(function() {
  var height, scrollBottom, width;
  height = $(window).scrollTop();
  scrollBottom = $(window).height() - $(window).scrollTop();
  width = $(window).width();
  console.log(scrollBottom);
  if (scrollBottom < ($(window).height() - $(".footer").height())) {
    $(".join").css("top", "70px");
  } else {
    $(".join").css({
      "top": "-" + $(".join").outerHeight() + "px"
    });
  }
  clearInterval(window.scrollTimer);
  window.scrollTimer = setTimeout((function() {
    $(".nav_list li a .icon-arrow-right").css("-webkit-transition", "none");
    return $(".nav_list li a .icon-arrow-right").css("transition", "none");
  }), 100);
  if (height > 0) {
    $(".nav").css("box-shadow", "0 0 4px 4px rgba(0, 0, 0, 0.1)");
    $(".nav").css("height", "70px");
    $(".nav .logo").css("line-height", "70px");
    $(".nav .nav_toggle .icon-menu").css("line-height", "70px");
    $(".nav .nav_toggle .icon-close").css("line-height", "70px");
    if (width > 730) {
      $(".nav_list li a").css("line-height", "70px");
      $(".nav_list li a .icon-arrow-right").css("-webkit-transition", "all 0.1s ease-in");
      $(".nav_list li a .icon-arrow-right").css("transition", "all 0.1s ease-in");
      return $(".nav_list li a .icon-arrow-right").css("line-height", "70px");
    }
  } else {
    $(".nav").css("box-shadow", "none");
    $(".nav").css("height", "90px");
    $(".nav .logo").css("line-height", "90px");
    $(".nav .nav_toggle .icon-menu").css("line-height", "90px");
    $(".nav .nav_toggle .icon-close").css("line-height", "90px");
    if (width > 730) {
      $(".nav_list li a").css("line-height", "90px");
      $(".nav_list li a .icon-arrow-right").css("-webkit-transition", "all 0.1s ease-in");
      $(".nav_list li a .icon-arrow-right").css("transition", "all 0.1s ease-in");
      return $(".nav_list li a .icon-arrow-right").css("line-height", "90px");
    }
  }
});

$(".nav_toggle").click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  if (window.isMenuOpen) {
    $(".nav_toggle .icon-close").addClass("icon-menu").removeClass("icon-close");
    $(".nav_list").css("display", "none");
    $(".icon-arrow-drop-up").css("display", "none");
    return window.isMenuOpen = false;
  } else {
    $(".nav_toggle .icon-menu").addClass("icon-close").removeClass("icon-menu");
    $(".nav_list").css("display", "block");
    $(".icon-arrow-drop-up").css("display", "block");
    return window.isMenuOpen = true;
  }
});

$(".nav_list a").click(function(e) {
  return e.stopPropagation();
});

$(document).click(function() {
  if (window.isMenuOpen) {
    $(".nav_toggle .icon-close").addClass("icon-menu").removeClass("icon-close");
    $(".nav_list").css("display", "none");
    $(".icon-arrow-drop-up").css("display", "none");
    return window.isMenuOpen = false;
  }
});

$(window).resize(function() {
  if ($(this).width() > 730) {
    $(".nav_list").css("display", "block");
    $(".nav_list li a").css("line-height", $(".nav").height() + "px");
    $(".nav_list li a .icon-arrow-right").css("-webkit-transition", "initial");
    $(".nav_list li a .icon-arrow-right").css("transition", "initial");
    $(".nav_list li a .icon-arrow-right").css("line-height", $(".nav").height() + "px");
  } else {
    if (!window.isMenuOpen) {
      $(".nav_list").css("display", "none");
    }
    $(".nav_list li a").css("line-height", "initial");
    $(".nav_list li a .icon-arrow-right").css("-webkit-transition", "initial");
    $(".nav_list li a .icon-arrow-right").css("transition", "initial");
    $(".nav_list li a .icon-arrow-right").css("line-height", "initial");
  }
  if ($(this).width() > 675) {
    $(".sitemap").css("float", "none");
    return $(".sitemap").css("float", "right");
  } else {
    return $(".sitemap").css("float", "none");
  }
});
