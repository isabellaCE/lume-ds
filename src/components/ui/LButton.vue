<script setup>
const props = defineProps({
  variant:  { type: String, default: "primary", validator: v => ["primary","secondary","ghost"].includes(v) },
  size:     { type: String, default: "md", validator: s => ["sm","md"].includes(s) },
  disabled: { type: Boolean, default: false },
  type:     { type: String, default: "button" },
  block:    { type: Boolean, default: false }
});
defineEmits(["click"]);
</script>

<template>
  <button
    :type="type"
    class="l-btn"
    :class="[`l-btn--${variant}`, `l-btn--${size}`, { 'l-btn--block': block, 'l-btn--disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.l-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: t.$font-sans;
  font-weight: 700;
  border-radius: t.$radius-md;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background .15s, color .15s, border-color .15s, opacity .15s;
  white-space: nowrap;

  &--md { font-size: 1.125rem; height: 56px; padding: 0 28px; min-width: 160px; }
  &--sm { font-size: 0.9375rem; height: 44px; padding: 0 20px; min-width: 100px; }
  &--block { width: 100%; min-width: 0; }

  &--primary {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-fg);
    border-color: var(--btn-primary-bg);
    &:hover:not(:disabled) { filter: brightness(1.1); }
  }

  &--secondary {
    background: var(--btn-secondary-bg);
    color: var(--btn-secondary-fg);
    border-color: var(--btn-secondary-border);
    &:hover:not(:disabled) { background: rgba(255,255,255,.06); }
  }

  &--ghost {
    background: transparent;
    color: var(--btn-ghost-fg);
    border-color: var(--btn-ghost-border);
    &:hover:not(:disabled) { background: rgba(255,255,255,.06); }
  }

  &--disabled,
  &:disabled {
    background: var(--btn-disabled-bg);
    color: var(--btn-disabled-fg);
    border-color: var(--btn-disabled-bg);
    cursor: not-allowed;
    filter: none;
  }
}
</style>
