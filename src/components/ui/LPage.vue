<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
  eyebrow: { type: String, default: "" },
  title:   { type: String, default: "" },
  description: { type: String, default: "" }
});
</script>

<template>
  <section class="page">
    <header class="page__head">
      <span v-if="eyebrow || route.meta?.section" class="page__eyebrow">
        {{ eyebrow || route.meta?.section }}
      </span>
      <h1 class="page__title">{{ title || route.meta?.title }}</h1>
      <p v-if="description" class="page__desc">{{ description }}</p>
    </header>

    <div class="page__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: var(--space-7);
  max-width: 1200px;
  margin: 0 auto;
}

.page__head {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-bottom: var(--space-5);
  border-bottom: var(--border-1) solid var(--border-default);
}

.page__eyebrow {
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  color: var(--accent);
  text-transform: uppercase;
  font-weight: var(--weight-bold);
}

.page__title {
  margin: 0;
  font-size: var(--text-3xl);
  line-height: var(--lh-tight);
}

.page__desc {
  margin: 0;
  font-size: var(--text-md);
  color: var(--fg-2);
  max-width: 70ch;
}

.page__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-7);
}

/* Subseções dentro do body */
:deep(.section) {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
:deep(.section h2) {
  margin: 0;
  font-size: var(--text-xl);
}
:deep(.section__lead) {
  margin: 0;
  color: var(--fg-2);
  max-width: 70ch;
}

:deep(.row) {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  align-items: flex-start;
}

:deep(.grid) {
  display: grid;
  gap: var(--space-4);
}
</style>
