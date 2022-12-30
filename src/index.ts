import "./sass/style.scss";

const root: HTMLElement | null = document.querySelector("html");
const darkTheme: string = "dark";
const lightTheme: string = "light";

export function switchTheme() {
  if (root) {
    root.dataset.theme = root.dataset.theme === darkTheme ? lightTheme : darkTheme;
  }
}

export function openDialog(dialog: HTMLDialogElement | null, modal: boolean = false) {
  if (dialog) {
    if (modal) {
      document.body.classList.add("modal-open");
      dialog.showModal();
    } else {
      dialog.show();
    }
  }
}

export function closeDialog(dialog: HTMLDialogElement | null) {
  document.body.classList.remove("modal-open");
  if (dialog) dialog.close();
}
