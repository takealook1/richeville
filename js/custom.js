// scroll event
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
var $html = $("html");

var page = 1;

var lastPage = $(".scrolling").length;

$html.animate({ scrollTop: 0 }, 10);
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});
// text
new TypeIt(".js_type", {
  speed: 250,
  waitUntilVisible: true,
  loop: false,
})
  .type("Richeville") // 타이핑
  // .pause(500) //멈춤
  // .delete(3)
  // .pause(500)
  // .type("lle.")
  // .pause(300)
  // .delete(1)
  // .pause(1000)
  // .move(3)
  // .pause(100)
  // .pause(1000)
  .move(1)
  .go(); // 실행

// indicator
$(".btn1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".intro").offset().top,
    },
    800
  );
});
$(".btn2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".works").offset().top,
    },
    800
  );
});
$(".btn3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".trend").offset().top,
    },
    800
  );
});
$(".btn4").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".service").offset().top,
    },
    800
  );
});

// 스크롤시 인디케이터 색상변화
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var scrollBottom =
    $(document).height() - $(window).height() - $(window).scrollTop();
  if (scroll <= $(".intro").offset().top) {
    $(".btn1").css("color", "white");
    $(".navi a").css("color", "gray");
    $(".navi a").mouseover().css("color", "white");
    $(".navi span").css("color", "gray");
    $(".header_indicator>a").not(".btn1").css("color", "gray");
  } else if (scroll <= $(".works").offset().top) {
    $(".btn2").css("color", "white");
    $(".header_indicator>a").not(".btn2").css("color", "gray");
    $(".navi a").css("color", "white");
    $(".navi span").css("color", "white");
    $(".navi img").css("filter", "invert(0)");
    $(".logo a img").css("filter", "invert(1)");
  } else if (scroll <= $(".trend").offset().top) {
    $(".btn3").css("color", "black");
    $(".header_indicator>a").not(".btn3").css("color", "gray");
    $(".navi a").css("color", "black");
    $(".navi span").css("color", "white");
    $(".navi img").css("filter", "invert(1)");
    $(".logo a img").css("filter", "invert(0)");
  } else if (scroll > $(".service").offset().top) {
    $(".btn4").css("color", "white");
    $(".header_indicator>a").not(".btn4").css("color", "gray");
    $("nav").fadeOut();
  } else {
    $("nav").fadeIn();
  }
});
// Header_notice_slick
$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  onAfterChange: {},
});
$(".slider").on("afterChange", function (event, slick, currentSlide) {
  if (currentSlide == 0) {
    $(".number>p").text("No.1");
  }
  if (currentSlide == 1) {
    $(".number>p").text("No.2");
  }
  if (currentSlide == 2) {
    $(".number>p").text("No.3");
  }
});
// modal_open
$(".modal_open").click(function () {
  $(".modal_back").fadeIn();
});
$(".modal_close ").click(function () {
  $(".modal_back").fadeOut();
});
// mouse_drag
// var pointSize = $(".pointer").width() / 2;
$(".swiper").mousemove(function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  if ($(window).width() > 767) {
    $(".pointer").css("top", mouseY - 100 + "px");
    $(".pointer").css("left", mouseX - 650 + "px");
    $(".pointer").fadeIn();
  }
});
$(".swiper").on("mouseleave", function () {
  $(".pointer").fadeOut();
});
// section_trend
$(window).on("load resize", function () {
  if ($(window).width() > 768) {
    $(".trend_wrapper").mousemove(function (e) {
      const mouseXX = -e.clientX;
      const mouseXXX = e.clientX;
      const mouseYY = e.clientY;
      if (mouseXXX < 800) {
        $(".trend_img1").css("left", mouseXX);
        $(".trend_img2").css("left", mouseXX + 1600);
        $(".trend_img2").css("zIndex", "65");
      } else {
      }
      if (mouseXXX > 800) {
        $(".trend_img1").css("left", mouseXX);
        $(".trend_img2").css("left", mouseXX + 1600);
        $(".trend_img2").css("zIndex", "77");
      }
    });
    $(".trend_wrapper").mouseleave(function () {
      $(".trend_img1").css("position", "absolute").css("left", "-50%");
      $(".trend_img2").css("position", "absolute").css("left", "50%");
    });
  }
  if ($(window).width() < 768) {
    $(".trend_wrapper").off("mousemove").off("mouseleave");
    $(".trend_img1").css("position", "relative").css("left", "0");
    $(".trend_img2").css("position", "relative").css("left", "0");
  } else {
    $(".trend_img1").css("position", "absolute").css("left", "-50%");
    $(".trend_img2").css("position", "absolute").css("left", "50%");
  }
});
// trend_hover
$(".trend_hover").mouseenter(function () {
  $(".trend_hover>h3").fadeOut();
  $(".trend_circle").fadeIn();
});
$(".trend_hover2").mouseenter(function () {
  $(".trend_hover2>h3").fadeOut();
  $(".trend_circle2").fadeIn();
});
$(".trend_left").mouseleave(function () {
  $(".trend_hover>h3").fadeIn("slow");
  $(".trend_circle").fadeOut("fast");
});
$(".trend_right").mouseleave(function () {
  $(".trend_hover2>h3").fadeIn("slow");
  $(".trend_circle2").fadeOut("fast");
});
