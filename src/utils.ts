export function switchTheme(root: HTMLElement | null) {
  if (root) {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  }
}

export function openPopup(dialog: HTMLDialogElement | null) {
  if (dialog) dialog.show();
}

export function closePopup(dialog: HTMLDialogElement | null) {
  if (dialog) dialog.close();
}

export function popup() {
  var popup_transform: string = "";
  var $body: HTMLElement = document.body;
  var $popupContainer: HTMLElement | null = document.querySelector(".card-popup");

  var openPopup = function (e: any) {
    if ($popupContainer) {
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
    }
  };

  var closePopup = function (e: any) {
    if ($popupContainer) {
      $popupContainer.addEventListener("transitionend", resetPopup, false);
      $popupContainer.style.transform = popup_transform;
      $body.classList.add("popup-close");
      $body.classList.remove("popup-open");
    }
  };

  var resetPopup = function (e: any) {
    if ($popupContainer && e.target === $popupContainer) {
      $body.classList.remove("popup-close");
      $popupContainer.removeAttribute("style");
      $popupContainer.removeEventListener("transitionend", resetPopup);
    }
  };

  document.addEventListener(
    "click",
    function (e: any) {
      var matches = e.target.matches(".card.card-open");
      if (matches) {
        openPopup(e);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (e: any) {
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
