export function getStyle(element, name) {
  return element.currentStyle
    ? element.currentStyle[name]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue(name)
    : null;
}

export function switchTheme() {
  const root = document.querySelector("html");
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
}
