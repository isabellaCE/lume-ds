<script setup>
defineProps({
  name:  { type: String, required: true },
  hex:   { type: String, required: true },
  /* tag opcional ex.: "AAA · 7,2:1" */
  tag:   { type: String, default: "" }
});
</script>

<template>
  <figure class="swatch">
    <div class="swatch__color" :style="{ background: hex }" />
    <figcaption class="swatch__caption">
      <span class="swatch__name">{{ name }}</span>
      <span class="swatch__hex">{{ hex }}</span>
      <span v-if="tag" class="swatch__tag">{{ tag }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.swatch {
  margin: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg-surface);
  border: var(--border-2) solid var(--border-default);
  border-radius: var(--radius-md);
  overflow: hidden;
  width: 200px;
}

.swatch__color {
  height: 132px;
  border-bottom: var(--border-1) solid var(--border-default);
}

.swatch__caption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-2) var(--space-3);
}

.swatch__name {
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  color: var(--fg-1);
}

.swatch__hex {
  font-size: var(--text-base);
  font-family: var(--font-mono);
  color: var(--fg-2);
}

.swatch__tag {
  font-size: var(--text-sm);
  margin-top: var(--space-1);
  align-self: flex-start;
  padding: 2px var(--space-2);
  border-radius: var(--radius-lg);
  background: var(--tag-green-bg);
  color: var(--tag-green-fg);
  font-weight: var(--weight-bold);
}
</style>
