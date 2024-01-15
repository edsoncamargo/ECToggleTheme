export class ThemeManager {
  key = "currentTheme";

  constructor(appId) {
    this.appId = appId;
    this.eApp = document.getElementById(this.appId);

    if (this.eApp) this.setTheme(this.getTheme());
  }

  setTheme(theme) {
    const themeClass = theme === "light" ? "ec-light-theme" : "ec-dark-theme";
    localStorage.setItem(this.key, themeClass);

    const removeClasses = ["ec-light-theme", "ec-dark-theme"];
    this.eApp.classList.remove(...removeClasses);
    this.eApp.classList.add(themeClass);
  }

  getTheme() {
    const currentTheme = localStorage.getItem(this.key);
    return currentTheme ? currentTheme : "ec-dark-theme";
  }
}

window.ThemeManager = ThemeManager;
