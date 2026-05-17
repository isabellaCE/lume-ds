<script setup>
import LIcon from "./LIcon.vue";

const props = defineProps({
  type:  { type: String, default: "info", validator: t => ["success","danger","warning","info"].includes(t) },
  title: { type: String, default: "" }
});

const icon = { success: "check-circle", danger: "x-circle", warning: "warning", info: "info" };
</script>

<template>
  <div class="l-alert" :class="`l-alert--${type}`" role="alert">
    <div class="l-alert__accent"></div>
    <LIcon :name="icon[type]" :size="28" :label="type" />
    <div class="l-alert__body">
      <strong v-if="title" class="l-alert__title">{{ title }}</strong>
      <p class="l-alert__text"><slot /></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.l-alert {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-radius: t.$radius-md;
  border: 1px solid;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}

.l-alert__accent {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 6px;
}

.l-alert__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.l-alert__title {
  font-size: 1.125rem;
  font-weight: 700;
  display: block;
}

.l-alert__text {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  max-width: 100%;
}

@mixin alert-variant($bg, $border, $fg) {
  background: $bg;
  border-color: $border;
  color: $fg;
  .l-alert__accent { background: $border; }
}

.l-alert--success { @include alert-variant(var(--alert-success-bg), var(--alert-success-border), var(--alert-success-fg)); }
.l-alert--danger  { @include alert-variant(var(--alert-danger-bg),  var(--alert-danger-border),  var(--alert-danger-fg)); }
.l-alert--warning { @include alert-variant(var(--alert-warning-bg), var(--alert-warning-border), var(--alert-warning-fg)); }
.l-alert--info    { @include alert-variant(var(--alert-info-bg),    var(--alert-info-border),    var(--alert-info-fg)); }
</style>
