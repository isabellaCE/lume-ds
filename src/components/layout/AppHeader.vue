<script setup>
import { RouterLink } from "vue-router";
import { useTheme } from "@/composables/useTheme";
import { useFontScale, FONT_STEPS } from "@/composables/useFontScale";

const { theme, setTheme } = useTheme();
const { step, setStep } = useFontScale();

const modes = [
  { value: "light", icon: "☀",  label: "Claro" },
  { value: "dark",  icon: "◑",  label: "Escuro" },
  { value: "hc",    icon: "◐",  label: "Alto Contraste" }
];
</script>

<template>
  <header class="app-header" role="banner">
    <RouterLink to="/" class="logo" aria-label="Lume — página inicial">
      <span class="logo__mark">L</span>
      <span class="logo__name">Lume</span>
    </RouterLink>

    <div class="header-controls">
      <!-- Font scale -->
      <div class="font-ctrl" role="group" aria-label="Tamanho da fonte">
        <span class="font-ctrl__label">FONTE</span>
        <div class="font-ctrl__buttons">
          <button
            v-for="(s, i) in FONT_STEPS"
            :key="i"
            class="font-ctrl__btn"
            :class="{ active: step === i }"
            :aria-pressed="step === i"
            :aria-label="`${Math.round(s * 100)}%`"
            @click="setStep(i)"
          >
            <span :style="{ fontSize: `${10 + i * 2}px` }">A</span>
          </button>
        </div>
      </div>

      <!-- Mode switcher -->
      <div class="mode-ctrl" role="radiogroup" aria-label="Modo de cor">
        <button
          v-for="m in modes"
          :key="m.value"
          class="mode-ctrl__btn"
          :class="{ active: theme === m.value }"
          role="radio"
          :aria-checked="theme === m.value"
          @click="setTheme(m.value)"
        >
          <span class="mode-ctrl__icon" aria-hidden="true">{{ m.icon }}</span>
          <span>{{ m.label }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: t.$header-h;
  padding: 0 24px;
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

// Logo
.logo {
  display: flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
  flex-shrink: 0;
}

.logo__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--logo-mark-bg);
  color: var(--logo-mark-fg);
  font-family: t.$font-sans;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: t.$radius-md;
}

.logo__name {
  font-family: t.$font-sans;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--logo-text-fg);
  padding: 0 16px;
}

// Header controls row
.header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

// Font scale control
.font-ctrl {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: var(--ctrl-bg);
  border: 1px solid var(--ctrl-border);
  border-radius: t.$radius-md;
  height: 52px;
}

.font-ctrl__label {
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--ctrl-label-fg);
  white-space: nowrap;
}

.font-ctrl__buttons {
  display: flex;
  align-items: center;
  gap: 4px;
}

.font-ctrl__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--ctrl-border);
  border-radius: t.$radius-sm;
  color: var(--ctrl-fg);
  cursor: pointer;
  font-family: t.$font-sans;
  font-weight: 700;
  transition: background .15s, color .15s;

  &:hover { border-color: var(--accent); color: var(--fg-1); }

  &.active {
    background: var(--ctrl-active-bg);
    border-color: var(--ctrl-active-bg);
    color: var(--ctrl-active-fg);
  }
}

// Mode switcher
.mode-ctrl {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  background: var(--ctrl-bg);
  border: 1px solid var(--ctrl-border);
  border-radius: t.$radius-lg;
  height: 52px;
}

.mode-ctrl__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  height: 40px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: t.$radius-md;
  color: var(--ctrl-fg);
  cursor: pointer;
  font-family: t.$font-sans;
  font-size: 0.9375rem;
  white-space: nowrap;
  transition: background .15s, color .15s, border-color .15s;

  &:hover { color: var(--fg-1); }

  &.active {
    background: var(--ctrl-active-bg);
    border-color: var(--ctrl-active-bg);
    color: var(--ctrl-active-fg);
    font-weight: 700;
  }
}

.mode-ctrl__icon { font-size: 1rem; }

@media (max-width: 720px) {
  .app-header { flex-direction: column; height: auto; padding: 12px 16px; }
  .header-controls { width: 100%; }
  .mode-ctrl__btn span:last-child { display: none; }
}
</style>
