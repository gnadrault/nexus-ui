// Card popup
export default function popup() {
  var popup_transform = "";
  var $body = document.body;
  var $popupContainer = document.querySelector(".card-popup");

  var openPopup = function (e) {
    var popup_bounding_rect = $popupContainer.getBoundingClientRect(),
      card_bounding_rect = e.target.getBoundingClientRect(),
      translateX = card_bounding_rect.left + "px",
      translateY = card_bounding_rect.top + "px",
      scaleX = card_bounding_rect.width / popup_bounding_rect.width,
      scaleY = card_bounding_rect.height / popup_bounding_rect.height;

    popup_transform = "translate(" + translateX + "," + translateY + ") scale(" + scaleX + ", " + scaleY + ")";
    $popupContainer.style.transform = popup_transform;
    document.body.offsetWidth;
    $body.classList.add("popup-open");
    $popupContainer.style.transform = "translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1)";
  };

  var closePopup = function (e) {
    $popupContainer.addEventListener("transitionend", resetPopup, false);
    $popupContainer.style.transform = popup_transform;
    $body.classList.add("popup-close");
    $body.classList.remove("popup-open");
  };

  var resetPopup = function (e) {
    if (e.target === $popupContainer) {
      $body.classList.remove("popup-close");
      $popupContainer.removeAttribute("style");
      $popupContainer.removeEventListener("transitionend", resetPopup);
    }
  };

  document.addEventListener(
    "click",
    function (e) {
      var matches = e.target.matches(".card");
      if (matches) {
        openPopup(e);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (e) {
      var matches = e.target.matches(".card-popup__dismiss");
      if (matches) {
        closePopup(e);
      }
    },
    false
  );

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.code === "Escape" && $body.classList.contains("popup-open")) {
        closePopup(e);
      }
    },
    false
  );
}
