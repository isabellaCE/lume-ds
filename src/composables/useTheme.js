import { ref, watchEffect } from "vue";

const THEMES = ["light", "dark", "hc"];
const KEY = "lume-theme";

function readInitial() {
  const stored = localStorage.getItem(KEY);
  if (THEMES.includes(stored)) return stored;
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

const theme = ref(readInitial());

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem(KEY, theme.value);
});

export function useTheme() {
  const setTheme = (t) => { if (THEMES.includes(t)) theme.value = t; };
  return { theme, setTheme, THEMES };
}
