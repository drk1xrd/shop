(function () {
  const root = document.documentElement;
  const switcher = document.getElementById("themeSwitcher");
  const THEME_KEY = "ugktid-theme";

  // детекция системной темы
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const stored = localStorage.getItem(THEME_KEY);

  const initialTheme =
    stored === "light" || stored === "dark"
      ? stored
      : prefersDark
      ? "dark"
      : "light";

  root.setAttribute("data-theme", initialTheme);

  if (switcher) {
    switcher.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
})();
