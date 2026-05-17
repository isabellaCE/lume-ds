<script setup>
import { useFontScale, FONT_STEPS } from "@/composables/useFontScale";

const { step, setStep } = useFontScale();
</script>

<template>
  <div class="font-scale" role="group" aria-label="Tamanho da fonte">
    <span class="font-scale__label" aria-hidden="true">FONTE</span>
    <div class="font-scale__row">
      <button
        v-for="(s, i) in FONT_STEPS"
        :key="i"
        type="button"
        class="font-scale__btn"
        :class="{ active: step === i }"
        :aria-pressed="step === i"
        :aria-label="`Tamanho ${Math.round(s * 100)}%`"
        @click="setStep(i)"
      >
        <span :style="{ fontSize: `${0.8 + i * 0.12}rem` }">A</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.font-scale {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  border: var(--border-2) solid var(--chrome-border);
  background: var(--bg-surface);
  min-height: 66px;
}

.font-scale__label {
  font-size: var(--text-lg);
  font-weight: var(--weight-regular);
  color: var(--fg-3);
  padding: 0 var(--space-2);
  letter-spacing: var(--tracking-wide);
}

.font-scale__row {
  display: inline-flex;
  gap: var(--space-1);
  align-items: stretch;
}

.font-scale__btn {
  appearance: none;
  border: var(--border-1) solid var(--border-strong);
  background: var(--bg-surface);
  color: var(--fg-3);
  width: 40px;
  height: 50px;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-weight: var(--weight-bold);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard);
}

.font-scale__btn:hover {
  color: var(--fg-1);
  border-color: var(--accent);
}

.font-scale__btn.active {
  background: var(--brand);
  color: var(--on-brand);
  border-color: var(--brand);
}

[data-theme="hc"] .font-scale__btn.active {
  background: var(--yellow-hc);
  color: var(--black);
}
</style>
