<script setup>
const props = defineProps({
  name:  { type: String, required: true },
  size:  { type: [Number, String], default: 24 },
  color: { type: String, default: "currentColor" },
  label: { type: String, default: "" }
});

// Relative path from src/components/ui/ → src/assets/icons/
const modules = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
  query: "?raw",
  import: "default"
});

function svgFor(name) {
  const key = Object.keys(modules).find(k => k.endsWith(`/${name}.svg`));
  return key ? modules[key] : "";
}
</script>

<template>
  <span
    class="l-icon"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
    :style="{
      width:  typeof size === 'number' ? `${size}px` : size,
      height: typeof size === 'number' ? `${size}px` : size,
      color:  color
    }"
    v-html="svgFor(name)"
  />
</template>

<style scoped>
.l-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.l-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
