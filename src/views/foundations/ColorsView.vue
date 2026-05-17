<script setup>
import WcagChip from "@/components/ui/WcagChip.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";

const slateColors = [
  { name: "slate-50",  hex: "#F8FAFC" }, { name: "slate-100", hex: "#F1F5F9" },
  { name: "slate-200", hex: "#E2E8F0" }, { name: "slate-300", hex: "#CBD5E1" },
  { name: "slate-400", hex: "#94A3B8" }, { name: "slate-500", hex: "#64748B" },
  { name: "slate-600", hex: "#475569" }, { name: "slate-700", hex: "#334155" },
  { name: "slate-800", hex: "#1E293B" }, { name: "slate-900", hex: "#0F172A" }
];

const amberColors = [
  { name: "amber-50",  hex: "#FFF7ED" }, { name: "amber-100", hex: "#FFEDD5" },
  { name: "amber-200", hex: "#FED7AA" }, { name: "amber-300", hex: "#FDBA74" },
  { name: "amber-400", hex: "#FFB347" }, { name: "amber-500", hex: "#FB923C" },
  { name: "amber-600", hex: "#D4660A" }, { name: "amber-700", hex: "#9A3412" },
  { name: "amber-800", hex: "#7C2D12" }, { name: "amber-900", hex: "#431407" }
];
</script>

<template>
  <div class="page">
    <p class="breadcrumb">FOUNDATIONS / CORES</p>
    <h1 class="page-title">Paleta — Grafite Neutro</h1>
    <p class="page-desc">
      Slate frio como base neutra + âmbar queimado como acento único.
      Calibrada para AAA em todos os modos.
    </p>

    <div class="chips">
      <WcagChip level="AAA" text="1.4.6 Contraste" />
      <WcagChip level="AAA" text="1.4.11 Não-textual" />
    </div>

    <!-- Slate -->
    <section class="section">
      <span class="section-label">SLATE — NEUTROS ESTRUTURAIS</span>
      <div class="swatch-grid">
        <div v-for="c in slateColors" :key="c.name" class="swatch">
          <div class="swatch__color" :style="{ background: c.hex }" />
          <div class="swatch__info">
            <span class="swatch__name">{{ c.name }}</span>
            <span class="swatch__hex">{{ c.hex }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Amber -->
    <section class="section">
      <span class="section-label">ÂMBAR - ACENTO ÚNICO</span>
      <div class="swatch-grid">
        <div v-for="c in amberColors" :key="c.name" class="swatch">
          <div class="swatch__color" :style="{ background: c.hex }" />
          <div class="swatch__info">
            <span class="swatch__name">{{ c.name }}</span>
            <span class="swatch__hex">{{ c.hex }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Boas práticas -->
    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <div class="demo-text-hierarchy">
            <p class="dth-title">Título — slate-800</p>
            <p class="dth-sub">Suporte — slate-600 (7,5:1)</p>
            <a href="#" class="dth-link" @click.prevent>Link — âmbar-600</a>
          </div>
        </template>
        <template #do-text>
          Use tokens semânticos (--fg-1, --fg-2, --accent). A hierarquia segue automática.
        </template>
        <template #dont-demo>
          <div class="demo-gradient-bad">
            <span>Texto sobre gradiente</span>
            <small>Contraste varia ao longo do fundo</small>
          </div>
        </template>
        <template #dont-text>
          Gradientes em fundos com texto quebram o contraste. Mantenha cores chapadas em áreas de leitura.
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
.page-desc  { font-size: 1.125rem; line-height: 1.6; color: var(--fg-1); margin: 0; max-width: 72ch; }

.chips { display: flex; gap: 12px; flex-wrap: wrap; }

.section { display: flex; flex-direction: column; gap: 16px; }

.section-label {
  font-size: 0.6875rem; font-weight: 700; letter-spacing: .08em;
  color: var(--section-label-fg); text-transform: uppercase;
}

.swatch-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

@media (max-width: 900px) { .swatch-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .swatch-grid { grid-template-columns: repeat(2, 1fr); } }

.swatch {
  background: var(--swatch-bg);
  border: 1px solid var(--swatch-border);
  border-radius: t.$radius-md;
  overflow: hidden;
}

.swatch__color { height: 100px; }

.swatch__info {
  padding: 8px 10px 10px;
  border-top: 1px solid var(--swatch-border);
  display: flex; flex-direction: column; gap: 2px;
}

.swatch__name { font-size: 0.875rem; font-weight: 700; color: var(--swatch-name-fg); }
.swatch__hex  { font-size: 0.8125rem; font-family: t.$font-mono; color: var(--swatch-hex-fg); }

/* Demo helpers */
.demo-text-hierarchy {
  display: flex; flex-direction: column; gap: 4px;
  padding: 12px; background: #fff; border-radius: t.$radius-sm;
  width: 100%;
}
[data-theme="dark"] .demo-text-hierarchy { background: #1E293B; }
[data-theme="hc"]   .demo-text-hierarchy { background: #000; }

.dth-title { font-size: 1rem; font-weight: 700; color: #1E293B; margin: 0; }
.dth-sub   { font-size: 0.875rem; color: #475569; margin: 0; }
.dth-link  { font-size: 0.875rem; color: #D4660A; font-weight: 700; }

[data-theme="dark"] .dth-title { color: #F1F5F9; }
[data-theme="dark"] .dth-sub   { color: #94A3B8; }
[data-theme="dark"] .dth-link  { color: #FB923C; }
[data-theme="hc"] .dth-title,
[data-theme="hc"] .dth-sub,
[data-theme="hc"] .dth-link { color: #FFEB3B; }

.demo-gradient-bad {
  width: 100%; padding: 16px;
  background: linear-gradient(135deg, #FB923C, #FFB347);
  border-radius: t.$radius-sm;
  display: flex; flex-direction: column; gap: 4px; align-items: center;
  span  { font-size: 1.125rem; font-weight: 700; color: #fff; }
  small { font-size: 0.8125rem; color: rgba(255,255,255,.7); }
}
</style>
