window.addEventListener("DOMContentLoaded", function () {
  $(".language-select").on("click", function (e) {
    $(".language-wrap").toggleClass("on");
    e.preventDefault();
  });
});
