<script setup>
import LPage from "@/components/ui/LPage.vue";
import LIcon from "@/components/ui/LIcon.vue";

const icons = [
  "home", "color", "font", "spacing", "access", "button", "card", "input",
  "link", "alert", "badge", "check-circle", "x-circle", "warning", "info"
];
</script>

<template>
  <LPage
    eyebrow="Foundations"
    title="Ícones"
    description="Ícones extraídos do Figma como SVG. Renderizados via máscara CSS para herdar cor de qualquer token semântico."
  >
    <section class="section">
      <h2>Catálogo</h2>
      <div class="grid icons">
        <figure v-for="name in icons" :key="name" class="icon-tile">
          <LIcon :name="name" :size="32" />
          <figcaption>{{ name }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section">
      <h2>Tamanhos</h2>
      <div class="row" style="align-items:center">
        <LIcon name="check-circle" :size="16" />
        <LIcon name="check-circle" :size="24" />
        <LIcon name="check-circle" :size="32" />
        <LIcon name="check-circle" :size="48" />
      </div>
    </section>

    <section class="section">
      <h2>Cores semânticas</h2>
      <div class="row" style="align-items:center">
        <LIcon name="check-circle" :size="40" color="var(--success-fg)" />
        <LIcon name="x-circle"     :size="40" color="var(--danger-fg)" />
        <LIcon name="warning"      :size="40" color="var(--warning-fg)" />
        <LIcon name="info"         :size="40" color="var(--info-fg)" />
        <LIcon name="info"         :size="40" color="var(--accent)" />
      </div>
    </section>
  </LPage>
</template>

<style scoped>
.icons {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
.icon-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4);
  background: var(--bg-surface);
  border: var(--border-1) solid var(--border-default);
  border-radius: var(--radius-md);
  margin: 0;
}
.icon-tile figcaption {
  font-size: var(--text-sm);
  color: var(--fg-2);
  font-family: var(--font-mono);
}
</style>
