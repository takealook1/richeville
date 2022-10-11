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

var lastPage = $(".sec_wrap").length;

$html.animate({ scrollTop: 0 }, 10);
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) {
      return;
    }
    $("main").css("margin", "0 ").css("width", "100%").css("height", "100vh");
    $("").css("margin", "0 ").css("width", "100%").css("height", "100vh");
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  if (page == 1) {
    $("main")
      .css("margin-top", "570px ")
      .css("width", "1200px")
      .css("height", "");
  }
  // img slide
  if (page == 4) {
    $(".eco_img")
      .delay(800)
      .animate(
        {
          left: "50%",
          opacity: 1,
        },
        800,
        function () {}
      );

    $(".eco_text")
      .delay(800)
      .animate(
        {
          top: "45%",
          opacity: 1,
        },
        300,
        function () {}
      );
  } else {
    $(".eco_img").animate(
      {
        left: "100%",
        opacity: 0,
      },
      800,
      function () {}
    );
    $(".eco_text").animate(
      {
        top: "65%",
        opacity: 0,
      },
      300,
      function () {}
    );
  }
  if (page == 5) {
    $(".human_img")
      .delay(800)
      .animate(
        {
          left: "-20%",
          opacity: 1,
        },
        800,
        function () {}
      );
    $(".human_text")
      .delay(800)
      .animate(
        {
          top: "45%",
          opacity: 1,
        },
        500,
        function () {}
      );
  } else {
    $(".human_img").animate(
      {
        left: "-50%",
        opacity: 0,
      },
      800,
      function () {}
    );
    $(".human_text").animate(
      {
        top: "65%",
        opacity: 0,
      },
      200,
      function () {}
    );
  }
  if (page == 6) {
    $(".tech_img").delay(800).fadeIn(600);
    $(".tech_text")
      .delay(800)
      .animate(
        {
          top: "45%",
          opacity: 1,
        },
        300,
        function () {}
      );
  } else {
    $(".tech_img").fadeOut("fast");
    $(".tech_text").animate(
      {
        top: "55%",
        opacity: 0,
      },
      300,
      function () {}
    );
  }
  if (page == 7) {
    $(".last_text1").delay(800).fadeIn(1000);
  } else {
    $(".last_text1").fadeOut("fast");
  }
  if (page == 8) {
    $(".last_back").animate({
      top: "-100vh",
    });
    $(".last_text2").fadeIn(900);
  } else {
    $(".last_back").animate({
      top: "0",
    });
  }

  var posTop = (page - 1) * $(window).height();
  $html.animate({ scrollTop: posTop }, 500);
});
