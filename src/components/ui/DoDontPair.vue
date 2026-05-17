<script setup>
/**
 * Do / Don't pair — side-by-side FAÇA / NÃO FAÇA cards
 * Slots: #do-demo, #do-text, #dont-demo, #dont-text
 */
</script>

<template>
  <div class="dd-grid">
    <div class="dd-cell dd-cell--do">
      <span class="dd-cell__label">FAÇA</span>
      <div class="dd-cell__demo"><slot name="do-demo" /></div>
      <p v-if="$slots['do-text']" class="dd-cell__text"><slot name="do-text" /></p>
    </div>
    <div class="dd-cell dd-cell--dont">
      <span class="dd-cell__label">NÃO FAÇA</span>
      <div class="dd-cell__demo"><slot name="dont-demo" /></div>
      <p v-if="$slots['dont-text']" class="dd-cell__text"><slot name="dont-text" /></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.dd-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 700px) {
  .dd-grid { grid-template-columns: 1fr; }
}

.dd-cell {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: t.$radius-md;
  border: 1px solid;
}

.dd-cell--do {
  background: var(--do-bg);
  border-color: var(--do-border);
  .dd-cell__label { color: var(--do-label-fg); }
  .dd-cell__text  { color: var(--do-text-fg); }
}

.dd-cell--dont {
  background: var(--dont-bg);
  border-color: var(--dont-border);
  .dd-cell__label { color: var(--dont-label-fg); }
  .dd-cell__text  { color: var(--dont-text-fg); }
}

.dd-cell__label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.dd-cell__demo {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--do-inner-bg);
  border-radius: t.$radius-sm;
  padding: 16px;
}

.dd-cell--dont .dd-cell__demo {
  background: var(--dont-inner-bg);
}

.dd-cell__text {
  font-size: 0.875rem;
  line-height: 1.55;
  margin: 0;
  max-width: 100%;
}
</style>
