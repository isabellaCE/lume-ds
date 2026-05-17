<script setup>
defineProps({
  meta:     { type: String, default: "" },
  title:    { type: String, default: "" },
  linkText: { type: String, default: "" },
  linkHref: { type: String, default: "#" }
});
</script>

<template>
  <article class="l-card">
    <span v-if="meta"  class="l-card__meta">{{ meta }}</span>
    <h3 v-if="title"  class="l-card__title">{{ title }}</h3>
    <p class="l-card__body"><slot /></p>
    <a v-if="linkText" :href="linkHref" class="l-card__link">{{ linkText }}</a>
  </article>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.l-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: t.$radius-md;
  color: var(--card-title-fg);
}

.l-card__meta {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--card-meta-fg);
}

.l-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--card-title-fg);
  margin: 0;
  line-height: 1.2;
}

.l-card__body {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--card-body-fg);
  margin: 0;
  max-width: 100%;
}

.l-card__link {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--card-link-fg);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  margin-top: 4px;
  align-self: flex-start;
}
</style>
