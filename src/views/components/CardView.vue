<script setup>
import PreviewBox from "@/components/ui/PreviewBox.vue";
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LCard from "@/components/ui/LCard.vue";
</script>

<template>
  <div class="page">
    <p class="breadcrumb">COMPONENTES / LUMECARD</p>
    <h1 class="page-title">Card</h1>
    <p class="page-desc">Agrupa informações relacionadas. Hierarquia tipográfica clara e padding generoso.</p>

    <!-- Variações -->
    <section class="section">
      <span class="section-label">VARIAÇÕES</span>
      <PreviewBox>
        <div class="cards-row">
          <LCard
            meta="COMPONENTES · BOTÃO"
            title="LumeButton"
            link-text="Ver documentação"
            link-href="#"
          >
            Componente acessível para ações primárias e secundárias, com estados de foco visíveis e suporte a leitor de tela.
          </LCard>
          <LCard
            meta="FOUNDATIONS · CORES"
            title="Paleta Grafite"
            link-text="Explorar paleta"
            link-href="#"
          >
            Slate frio + acento âmbar queimado. Todas as combinações fg/bg validadas em WCAG AAA.
          </LCard>
        </div>
      </PreviewBox>
    </section>

    <!-- Boas práticas -->
    <section class="section">
      <span class="section-label">BOAS PRÁTICAS</span>
      <DoDontPair>
        <template #do-demo>
          <LCard meta="CATEGORIA" title="Título descritivo" link-text="LINK" link-href="#">
            Texto com contraste 7,5:1 e linha generosa.
          </LCard>
        </template>
        <template #do-text>
          Hierarquia clara: meta &lt; título &lt; corpo. Padding ≥ 24px. Borda sutil de 1px.
        </template>
        <template #dont-demo>
          <div class="card-bad">
            <span class="card-bad__meta">CARD</span>
            <p class="card-bad__body">Lorem ipsum dolor sit amet consectetur</p>
            <span class="card-bad__link">→</span>
          </div>
        </template>
        <template #dont-text>
          Padding apertado, hierarquia confusa, link inacessível ("→" sem contexto).
        </template>
      </DoDontPair>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;
.page { display: flex; flex-direction: column; gap: 40px; max-width: 1200px; }
.breadcrumb { font-size: 0.75rem; letter-spacing:.06em; color: var(--breadcrumb-fg); text-transform: uppercase; margin: 0; }
.page-title { font-size: clamp(2.25rem,4vw,3rem); font-weight: 700; color: var(--fg-1); margin: 0; }
.page-desc  { font-size: 1.125rem; line-height: 1.6; color: var(--fg-1); max-width: 72ch; margin: 0; }
.section { display: flex; flex-direction: column; gap: 16px; }
.section-label { font-size: 0.6875rem; font-weight: 700; letter-spacing:.08em; color: var(--section-label-fg); text-transform: uppercase; }
.cards-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
.card-bad {
  display: flex; flex-direction: column; gap: 4px;
  padding: 8px; background: var(--card-bg);
  border: 1px solid var(--card-border); border-radius: t.$radius-sm;
  width: 180px;
}
.card-bad__meta { font-size: 0.625rem; color: var(--card-meta-fg); text-transform: uppercase; }
.card-bad__body { font-size: 0.75rem; color: var(--card-body-fg); margin: 0; max-width: 100%; }
.card-bad__link { font-size: 0.75rem; color: var(--card-link-fg); }
</style>
