window.addEventListener("DOMContentLoaded", function () {
  $(".language-select").on("click", function (e) {
    $(".language-wrap").toggleClass("on");
    e.preventDefault();
  });

  $(".go-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });
});

window.addEventListener("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".go-top").fadeIn();
  } else {
    $(".go-top").fadeOut();
  }
});
