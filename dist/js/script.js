let btnCall = document.querySelectorAll(".btn_transp");
let popup = document.querySelector(".popup-form");
let closePopup = document.querySelector(".close-form");
for (let i = 0; i < btnCall.length; ++i) {
  btnCall[i].onclick = function () {
    popup.classList.toggle("popup-form_hidden");
  };
}
closePopup.onclick = function () {
  popup.classList.toggle("popup-form_hidden");
  popup.classList.toggle("popup-form_animation");
};
