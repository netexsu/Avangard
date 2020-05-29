// Скрипт плавной прокрутки
$(document).ready(function () {
  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });
  // Гамбургер меню
  var btnMenu = $(".btn-menu");
  btnMenu.click(function () {
    btnMenu.toggleClass("btn-menu_active");
  });
});
