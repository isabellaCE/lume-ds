<script setup>
import { useTheme, THEMES } from "@/composables/useTheme";
import LIcon from "@/components/ui/LIcon.vue";

const { theme, setTheme } = useTheme();

const options = [
  { value: "light", label: "Claro",          icon: null }, // ícones poderiam vir do .fig (Property1Light)
  { value: "dark",  label: "Escuro",         icon: null },
  { value: "hc",    label: "Alto Contraste", icon: null }
];
</script>

<template>
  <div class="mode-switcher" role="radiogroup" aria-label="Modo de cor">
    <button
      v-for="opt in options"
      :key="opt.value"
      type="button"
      class="mode-pill"
      :class="{ active: theme === opt.value }"
      :aria-checked="theme === opt.value"
      role="radio"
      @click="setTheme(opt.value)"
    >
      <span class="mode-pill__label">{{ opt.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.mode-switcher {
  display: inline-flex;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  border: var(--border-2) solid var(--chrome-border);
  background: var(--bg-surface);
}

.mode-pill {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--fg-2);
  padding: var(--space-2) var(--space-4);
  min-height: var(--target-min);
  border-radius: var(--radius-lg);
  font-size: var(--text-md);
  font-weight: var(--weight-regular);
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard);
}

.mode-pill:hover { color: var(--fg-1); }

.mode-pill.active {
  background: var(--bg-raised);
  color: var(--fg-1);
  font-weight: var(--weight-bold);
}

[data-theme="hc"] .mode-pill {
  color: var(--yellow-hc);
  border: var(--border-1) solid transparent;
}
[data-theme="hc"] .mode-pill.active {
  background: var(--yellow-hc);
  color: var(--black);
}
</style>
