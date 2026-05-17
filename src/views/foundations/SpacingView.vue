<script setup>
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LButton from "@/components/ui/LButton.vue";
import PreviewBox from "@/components/ui/PreviewBox.vue";

const spaces = [
  { name: "space-1", rem: "0.25rem", px: "4px",  w: 4 },
  { name: "space-2", rem: "0.5rem",  px: "8px",  w: 8 },
  { name: "space-3", rem: "0.75rem", px: "12px", w: 12 },
  { name: "space-4", rem: "1rem",    px: "16px", w: 16 },
  { name: "space-5", rem: "1.5rem",  px: "24px", w: 24 },
  { name: "space-6", rem: "2rem",    px: "32px", w: 32 },
  { name: "space-8", rem: "3rem",    px: "48px", w: 48 },
  { name: "space-9", rem: "4rem",    px: "64px", w: 64 }
];
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMEBUTTON</p>
    <h1 class="page-title">Escala de espaçamento</h1>
    <p class="page-desc">
      Base 4px. Tokens consistentes alimentam padding, margin, gap.
      Tudo em rem para escalar com o controle de fonte.
    </p>

    <!-- Variações -->
    <section class="section">
      <span class="section-label">VARIAÇÕES</span>
      <div class="space-grid">
        <div v-for="s in spaces" :key="s.name" class="space-card">
          <div class="space-card__bar" :style="{ width: s.w + 'px' }" />
          <strong class="space-card__name">{{ s.name }}</strong>
          <span class="space-card__sub">{{ s.rem }} · {{ s.px }}</span>
        </div>
      </div>
    </section>

    <!-- Hit targets -->
    <section class="section">
      <span class="section-label">HIT TARGETS — ÁREA DE TOQUE</span>
      <DoDontPair>
        <template #do-demo>
          <LButton variant="primary" style="min-width:200px">Confirmar</LButton>
        </template>
        <template #do-text>
          Verbo claro descrevendo a ação que vai acontecer. Funciona fora de contexto — leitores de tela lêem só o label.
        </template>
        <template #dont-demo>
          <button class="demo-btn-bad">OK (24px)</button>
        </template>
        <template #dont-text>
          Botões compactos excluem usuários com tremor e exigem precisão milimétrica em mobile.
        </template>
      </DoDontPair>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.page { display: flex; flex-direction: column; gap: 40px; max-width: 1200px; }
.breadcrumb { font-size: 0.75rem; letter-spacing: .06em; color: var(--breadcrumb-fg); text-transform: uppercase; margin: 0; }
.page-title { font-size: clamp(2.25rem,4vw,3rem); font-weight: 700; color: var(--fg-1); margin: 0; }
.page-desc  { font-size: 1.125rem; line-height: 1.6; color: var(--fg-1); max-width: 72ch; margin: 0; }
.section { display: flex; flex-direction: column; gap: 16px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing: .08em; color: var(--section-label-fg); text-transform: uppercase; }

.space-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

@media (max-width: 800px) { .space-grid { grid-template-columns: repeat(2, 1fr); } }

.space-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: var(--space-card-bg);
  border: 1px solid var(--space-card-border);
  border-radius: t.$radius-md;
}

.space-card__bar {
  height: 16px;
  background: var(--space-bar-color);
  border-radius: t.$radius-xs;
  min-width: 4px;
}

.space-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--space-card-fg);
}

.space-card__sub {
  font-size: 0.875rem;
  color: var(--space-card-sub);
}

.demo-btn-bad {
  height: 24px; padding: 0 12px;
  background: var(--bg-elevated); color: var(--fg-3);
  border: 1px dashed var(--fg-3); border-radius: t.$radius-sm;
  font-family: t.$font-sans; font-size: 0.75rem; cursor: pointer;
}
</style>
