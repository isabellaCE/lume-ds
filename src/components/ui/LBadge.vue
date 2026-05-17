<script setup>
import LIcon from "./LIcon.vue";

const props = defineProps({
  state: { type: String, default: "success", validator: s => ["success","reject","pending","analysis"].includes(s) }
});

const map = {
  success:  { icon: "check-circle", label: "Aprovado" },
  reject:   { icon: "x-circle",     label: "Rejeitado" },
  pending:  { icon: "warning",      label: "Pendente" },
  analysis: { icon: "info",         label: "Em análise" }
};
</script>

<template>
  <span class="l-badge" :class="`l-badge--${state}`" role="status">
    <LIcon :name="map[state].icon" :size="18" />
    <span><slot>{{ map[state].label }}</slot></span>
  </span>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.l-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px 4px 8px;
  border-radius: t.$radius-pill;
  border: 1px solid;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1;
}

.l-badge--success  { background: var(--badge-success-bg); border-color: var(--badge-success-border); color: var(--badge-success-fg); }
.l-badge--reject   { background: var(--badge-danger-bg);  border-color: var(--badge-danger-border);  color: var(--badge-danger-fg); }
.l-badge--pending  { background: var(--badge-warning-bg); border-color: var(--badge-warning-border); color: var(--badge-warning-fg); }
.l-badge--analysis { background: var(--badge-info-bg);    border-color: var(--badge-info-border);    color: var(--badge-info-fg); }
</style>
