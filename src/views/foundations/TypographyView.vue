<script setup>
import WcagChip from "@/components/ui/WcagChip.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";

const scale = [
  { token: "4xl · 60px (h1)", size: 60, sample: "Acessibilidade",        weight: 700 },
  { token: "3xl · 48px (h2)", size: 48, sample: "Para baixa visão",       weight: 700 },
  { token: "2xl · 36px (h3)", size: 36, sample: "Subtítulo de seção",     weight: 700 },
  { token: "xl · 30px (h4)",  size: 30, sample: "Título de componente",   weight: 700 },
  { token: "lg · 24px",       size: 24, sample: "Corpo destaque",         weight: 400 },
  { token: "base · 20px",     size: 20, sample: "Corpo padrão — mínimo absoluto", weight: 700 },
  { token: "sm · 18px",       size: 18, sample: "Texto secundário",       weight: 400 },
  { token: "xs · 16px",       size: 16, sample: "Apenas metadados — nunca corpo", weight: 400 }
];
</script>

<template>
  <div class="page">
    <p class="breadcrumb">FOUNDATIONS / TIPOGRAFIA</p>
    <h1 class="page-title">Tipografia — Atkinson Hyperlegible</h1>
    <p class="page-desc">
      Família desenvolvida pelo Braille Institute para maximizar a diferenciação
      entre caracteres similares (a/o, l/I/1, 0/O). Corpo mínimo de 20px.
    </p>

    <div class="chips">
      <WcagChip level="AAA" text="1.4.4 Redimensionar" />
      <WcagChip level="AA"  text="1.4.12 Espaçamento" />
    </div>

    <!-- Scale -->
    <section class="section">
      <span class="section-label">ESCALA TIPOGRÁFICA</span>
      <div class="scale">
        <div v-for="row in scale" :key="row.token" class="scale-row">
          <span class="scale-row__label">{{ row.token }}</span>
          <span
            class="scale-row__sample"
            :style="{ fontSize: row.size + 'px', fontWeight: row.weight }"
          >{{ row.sample }}</span>
        </div>
      </div>
    </section>

    <!-- Por que Atkinson -->
    <section class="section">
      <span class="section-label">POR QUE ATKINSON HYPERLEGIBLE?</span>
      <DoDontPair>
        <template #do-demo>
          <div class="demo-font-good">
            <p class="demo-font-sample">Illegal 1l OO</p>
            <p class="demo-font-sub">caracteres distinguíveis</p>
            <a href="#" class="demo-font-link" @click.prevent>Link — âmbar-600</a>
          </div>
        </template>
        <template #do-text>
          I, l, I têm formas únicas. 0 e O são claramente diferentes.
          Diferenciação calibrada para baixa visão.
        </template>
        <template #dont-demo>
          <div class="demo-font-bad">
            <p class="demo-font-sample" style="font-family: Arial, sans-serif;">Illegal 1l OO</p>
            <p class="demo-font-sub" style="font-family: Arial, sans-serif;">geométrica neutra</p>
          </div>
        </template>
        <template #dont-text>
          I, l, I têm formas únicas. 0 e O são claramente diferentes.
          Diferenciação calibrada para baixa visão.
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
.chips { display: flex; gap: 12px; flex-wrap: wrap; }
.section { display: flex; flex-direction: column; gap: 16px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing: .08em; color: var(--section-label-fg); text-transform: uppercase; }

.scale { display: flex; flex-direction: column; }

.scale-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid var(--typo-row-border);
}

.scale-row__label {
  font-size: 0.875rem;
  color: var(--typo-label-fg);
  font-family: t.$font-mono;
}

.scale-row__sample {
  font-family: t.$font-sans;
  color: var(--fg-1);
  line-height: 1.15;
}

/* Demo */
.demo-font-good, .demo-font-bad {
  display: flex; flex-direction: column; gap: 4px; align-items: center; width: 100%;
}

.demo-font-sample {
  font-size: 2rem; font-weight: 700; margin: 0;
  color: var(--fg-1);
}

.demo-font-sub {
  font-size: 0.875rem; color: var(--fg-3); margin: 0;
}

.demo-font-link {
  font-size: 0.875rem; color: var(--link); font-weight: 700;
  margin-top: 4px;
}
</style>
