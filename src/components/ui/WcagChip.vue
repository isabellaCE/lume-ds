<script setup>
/**
 * WCAG criteria pill — level (AA|AAA) + criterion number + label
 * AA  → blue bg (light/dark), yellow text (hc)
 * AAA → green bg (light/dark), yellow text (hc)
 */
const props = defineProps({
  level: { type: String, required: true },  // "AA" or "AAA"
  text:  { type: String, required: true }   // e.g. "1.4.6 Contraste"
});
</script>

<template>
  <span
    class="wcag-chip"
    :class="`wcag-chip--${level.toLowerCase()}`"
    :aria-label="`WCAG ${level} — ${text}`"
  >
    <strong aria-hidden="true">{{ level }}</strong>
    <span class="wcag-chip__dot" aria-hidden="true">·</span>
    <span aria-hidden="true">{{ text }}</span>
  </span>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.wcag-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: t.$radius-pill;
  font-size: 0.8125rem;
  font-weight: 400;
  white-space: nowrap;

  strong { font-weight: 700; }
}

.wcag-chip--aaa {
  background: var(--chip-aaa-bg);
  color: var(--chip-aaa-fg);
  border: 1px solid var(--chip-aaa-bg);
}

.wcag-chip--aa {
  background: var(--chip-aa-bg);
  color: var(--chip-aa-fg);
  border: 1px solid var(--chip-aa-bg);
}

[data-theme="hc"] {
  .wcag-chip--aaa,
  .wcag-chip--aa {
    background: transparent;
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
