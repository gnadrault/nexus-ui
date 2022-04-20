import { switchTheme } from "./scripts/utils.js";
import { loadElements } from "./scripts/load.js";
import popup from "./scripts/popup.js";

const el = loadElements();
popup();

/**
 * EVENT LISTENER
 */

// Dispaly home
el.homeLink.addEventListener("click", (e) => {
  el.homeContent.style.display = "block";
  el.projectsContent.style.display = "none";
});
el.homeLinkDialog.addEventListener("click", (e) => {
  el.homeContent.style.display = "block";
  el.projectsContent.style.display = "none";
  el.burgerMenu.click();
});
// Display projects
el.projectsLink.addEventListener("click", (e) => {
  el.homeContent.style.display = "none";
  el.projectsContent.style.display = "block";
});
el.projectsLinkDialog.addEventListener("click", (e) => {
  el.homeContent.style.display = "none";
  el.projectsContent.style.display = "block";
  el.burgerMenu.click();
});

// Switch theme
el.btnSwitchTheme.addEventListener("click", (e) => {
  switchTheme();
});

// Display dialog menu
el.burgerMenu.addEventListener("click", (e) => {
  el.burgerMenu.classList.toggle("menu-open");
  if (!el.dialogMenu.open) {
    el.dialogMenu.show();
  } else {
    el.dialogMenu.close();
  }
});
