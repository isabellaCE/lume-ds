import { ref, watchEffect } from "vue";

export const FONT_STEPS = [0.875, 1, 1.125, 1.25, 1.5];
const KEY = "lume-font-step";

function readInitial() {
  const s = parseInt(localStorage.getItem(KEY), 10);
  return Number.isInteger(s) && s >= 0 && s < FONT_STEPS.length ? s : 2;
}

const step = ref(readInitial());

watchEffect(() => {
  document.documentElement.style.setProperty("--font-scale", FONT_STEPS[step.value]);
  localStorage.setItem(KEY, step.value);
});

export function useFontScale() {
  const setStep = (i) => { if (i >= 0 && i < FONT_STEPS.length) step.value = i; };
  return { step, setStep, FONT_STEPS };
}
