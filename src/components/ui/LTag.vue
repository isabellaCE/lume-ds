<script setup>
const props = defineProps({
  tone: { type: String, default: "blue", validator: (t) => ["blue","green"].includes(t) }
});
</script>

<template>
  <span class="l-tag" :class="`l-tag--${tone}`">
    <slot>[TEXT]</slot>
  </span>
</template>

<style scoped>
.l-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-lg);
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  min-height: 36px;
  line-height: 1;
}

.l-tag--blue  { background: var(--tag-blue-bg);  color: var(--tag-blue-fg);  }
.l-tag--green { background: var(--tag-green-bg); color: var(--tag-green-fg); }

[data-theme="hc"] .l-tag {
  border: var(--border-2) solid var(--yellow-hc);
}
</style>
