import { switchTheme } from "./scripts/utils.js";
import { loadElements } from "./scripts/load.js";
const el = loadElements();

/**
 * EVENT LISTENER
 */

// Dispaly home
el.homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  el.homeContent.style.display = "block";
  el.projectsContent.style.display = "none";
});

// Display projects
el.projectsLink.addEventListener("click", (e) => {
  e.preventDefault();
  el.homeContent.style.display = "none";
  el.projectsContent.style.display = "block";
});

// Switch theme
el.btnSwitchTheme.addEventListener("click", (e) => {
  e.preventDefault();
  switchTheme();
});

// Display dialog menu
el.burgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  el.burgerMenu.classList.toggle("menu-open");
  if (!el.dialogMenu.open) {
    el.dialogMenu.show();
  } else {
    el.dialogMenu.close();
  }
});
