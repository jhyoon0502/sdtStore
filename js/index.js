window.addEventListener("DOMContentLoaded", function () {
  $(".language-select").on("click", function (e) {
    $(".language-wrap").toggleClass("on");
    e.preventDefault();
  });

  const selectAll = $("#selectAll");
  selectAll.on("click", function () {
    if (selectAll.prop("checked")) {
      $("input[name=menu]").prop("checked", true);
    } else {
      $("input[name=menu]").prop("checked", false);
    }
  });

  const cateA = $(".cate-a");
  cateA.on("click", function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass("on").next().show();
    }
    function slideUp() {
      $(".cate-a").removeClass("on").next().hide();
    }
    $(this).hasClass("on") ? slideUp() : slideDown(this);

    // $(this).toggleClass("on");
    // $(this).not($(this)).removeClass("on");

    if ($(".cate-a").hasClass("on")) {
      $(this).next().css("display", "block");
    } else {
      $(this).next().css("display", "none");
    }
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
