document.addEventListener("DOMContentLoaded", function () {
  const btnSwitchTheme = document.querySelector("#btn-theme");
  const burgerMenu = document.querySelector("#burger-menu");
  const dialogMenu = document.querySelector("#dialog-menu");
  const dialogCard = document.querySelector("#dialog-card");
  const cardsOpen = document.querySelectorAll(".card.card-open");
  const btnCardDialogClose = document.querySelector(".dialog-card__close");
  const root = document.querySelector("html");
  const darkTheme = "dark";
  const lightTheme = "light";

  function switchTheme() {
    if (root) {
      root.dataset.theme = root.dataset.theme === darkTheme ? lightTheme : darkTheme;
    }
  }

  function openDialog(dialog, modal = false) {
    if (dialog) {
      if (modal) {
        document.body.classList.add("modal-open");
        dialog.showModal();
      } else {
        dialog.show();
      }
    }
  }

  function closeDialog(dialog) {
    if (dialog) dialog.close();
  }

  /**
   * EVENT LISTENER
   */
  // Switch theme
  btnSwitchTheme?.addEventListener("click", (e) => {
    switchTheme();
  });

  // Display dialog menu
  burgerMenu?.addEventListener("click", (e) => {
    burgerMenu?.classList.toggle("menu-open");
    if (!dialogMenu?.open) {
      openDialog(dialogMenu);
    } else {
      closeDialog(dialogMenu);
    }
  });

  // Open card dialog
  cardsOpen.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!dialogCard?.open) {
        openDialog(dialogCard, true);
      }
    });
  });

  // Close card dialog
  btnCardDialogClose?.addEventListener("click", (e) => {
    if (dialogCard?.open) {
      closeDialog(dialogCard);
    }
  });

  dialogCard?.addEventListener("close", (e) => {
    document.body.classList.remove("modal-open");
  });
});
