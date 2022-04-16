const DOMElements = {
  homeLink: "#nav-links-lg li:nth-child(1) > a",
  homeLinkDialog: "#dialog-links li:nth-child(1) > a",
  projectsLink: "#nav-links-lg li:nth-child(2) > a",
  projectsLinkDialog: "#dialog-links li:nth-child(2) > a",
  btnSwitchTheme: "#btn-theme",
  homeContent: "#content-home",
  projectsContent: "#content-projects",
  burgerMenu: "#burger-menu",
  dialogMenu: "#dialog-menu",
  mainContainer: "#main-container",
};

export function loadElements() {
  const elements = {};
  Object.keys(DOMElements).forEach((key) => {
    elements[key] = document.querySelector(DOMElements[key]);
  });
  return elements;
}
