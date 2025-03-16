import { companyThemes } from "./themeUtils";

export const applyThemeFromQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const company = params.get("company");

  const defaultTheme = {
    primary: "var(--bg-light)",
    secondary: "var(--bg-dark)",
    accent: "var(--font-light)",
  };

  const theme = company && companyThemes[company] ? companyThemes[company] : defaultTheme;

  document.documentElement.style.setProperty("--primary-color", theme.primary);
  document.documentElement.style.setProperty("--secondary-color", theme.secondary);
  document.documentElement.style.setProperty("--accent-color", theme.accent);
};