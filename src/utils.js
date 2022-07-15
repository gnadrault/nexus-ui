export function switchTheme(root) {
  if (root) {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  }
}

export function openPopup(dialog) {
  if (dialog) dialog.show();
}

export function closePopup(dialog) {
  if (dialog) dialog.close();
}
