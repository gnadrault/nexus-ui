import { closePopup, openPopup, popup, switchTheme } from "./utils";
import "./sass/style.scss";

const btnSwitchTheme: HTMLElement | null = document.querySelector("#btn-theme");
const burgerMenu: HTMLElement | null = document.querySelector("#burger-menu");
const dialogMenu: HTMLDialogElement | null = document.querySelector("#dialog-menu");

/**
 * EVENT LISTENER
 */
// Switch theme
btnSwitchTheme?.addEventListener("click", (e: Event) => {
  const root: HTMLElement | null = document.querySelector("html");
  switchTheme(root);
});

// Display dialog menu
burgerMenu?.addEventListener("click", (e) => {
  burgerMenu?.classList.toggle("menu-open");
  if (!dialogMenu?.open) {
    openPopup(dialogMenu);
  } else {
    closePopup(dialogMenu);
  }
});

popup();
