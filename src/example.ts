document.addEventListener("DOMContentLoaded", function () {
  const btnSwitchTheme: HTMLElement | null = document.querySelector("#btn-theme");
  const burgerMenu: HTMLElement | null = document.querySelector("#burger-menu");
  const dialogMenu: HTMLDialogElement | null = document.querySelector("#dialog-menu");
  const dialogCard: HTMLDialogElement | null = document.querySelector("#dialog-card");
  const cardsOpen: NodeListOf<HTMLElement> | null = document.querySelectorAll(".card.card-open");
  const btnCardDialogClose: HTMLElement | null = document.querySelector(".dialog-card__close");
  const root: HTMLElement | null = document.querySelector("html");
  const darkTheme: string = "dark";
  const lightTheme: string = "light";

  function switchTheme() {
    if (root) {
      root.dataset.theme = root.dataset.theme === darkTheme ? lightTheme : darkTheme;
    }
  }

  function openDialog(dialog: HTMLDialogElement | null, modal: boolean = false) {
    if (dialog) {
      if (modal) {
        document.body.classList.add("modal-open");
        dialog.showModal();
      } else {
        dialog.show();
      }
    }
  }

  function closeDialog(dialog: HTMLDialogElement | null) {
    if (dialog) dialog.close();
  }

  /**
   * EVENT LISTENER
   */
  // Switch theme
  btnSwitchTheme?.addEventListener("click", (e: Event) => {
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
