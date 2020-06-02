// Скрипт плавной прокрутки
$(document).ready(function () {
  // ПЛавная прокрутка
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
  // Отправка почты
  $(document).ready(function () {
    //E-mail Ajax Send
    $("form").submit(function () {
      //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize(),
      }).done(function () {
        alert("Thank you!");
        setTimeout(function () {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  });
});
