<script setup>
/**
 * Preview Interativo — bordered container labelled "Preview Interativo"
 * Wraps the live component demo on each doc page.
 */
defineProps({ label: { type: String, default: "Preview Interativo" } });
</script>

<template>
  <div class="preview-box">
    <span class="preview-box__label">{{ label }}</span>
    <div class="preview-box__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.preview-box {
  border: 1px solid var(--preview-border);
  border-radius: t.$radius-md;
  background: var(--preview-bg);
  overflow: hidden;
}

.preview-box__label {
  display: block;
  padding: 10px 16px;
  font-size: 0.8125rem;
  color: var(--preview-label);
  border-bottom: 1px solid var(--preview-border);
}

.preview-box__body {
  padding: 24px;
}
</style>
