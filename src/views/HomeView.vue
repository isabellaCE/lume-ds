<script setup>
import LButton from "@/components/ui/LButton.vue";

const stats = [
  { value: "6+",   accent: "+",  plain: "6",   label: "Componentes acessíveis" },
  { value: "AAA",  accent: "AAA", plain: "",   label: "Conformidade WCAG 2.2" },
  { value: "3",    accent: "",   plain: "3",   label: "Temas — claro, escuro, alto contraste" },
  { value: "5",    accent: "",   plain: "5",   label: "Níveis de fonte (14–28px)" }
];

const principles = [
  { n: "01", title: "Texto grande por padrão",
    body: 'Corpo mínimo de 20px. Nada de 14px disfarçado de "denso". A escala completa é redimensionável até 200% sem quebrar layout.' },
  { n: "02", title: "Contraste AAA por padrão",
    body: "Todos os pares fg/bg semânticos têm razão ≥ 7:1. Cinza claro sobre branco simplesmente não existe no Lume." },
  { n: "03", title: "Foco impossível de ignorar",
    body: "Anel de foco de 3px com offset de 3px em laranja queimado #D4660A — visível em todos os temas, em qualquer fundo." },
  { n: "04", title: "Cor nunca sozinha",
    body: "Estados (sucesso, erro, aviso) sempre carregam ícone + label além da cor. Daltonismo é regra, não exceção." },
  { n: "05", title: "Hit targets generosos",
    body: "Mínimo de 48×48px (acima do exigido WCAG 2.5.5). Botões e campos usam 56px por padrão — confortável até com tremor de mão." },
  { n: "06", title: "Controle real do usuário",
    body: "Tema, fonte e contraste são escolhas do usuário — não do designer. Preferências persistem entre sessões e respeitam o sistema." }
];
</script>

<template>
  <div class="home">
    <p class="home__breadcrumb">DESIGN SYSTEM · ACESSIBILIDADE · TCC DOM HELDER · 2026</p>

    <h1 class="home__title">Lume<span class="home__dot">.</span></h1>

    <p class="home__desc">
      Um design system que coloca a baixa visão no centro de cada decisão —
      tokens em <strong>WCAG AAA</strong>, três modos de cor, controle de fonte
      real e componentes que nascem acessíveis.
    </p>

    <div class="home__ctas">
      <LButton variant="primary">Ver componentes</LButton>
      <LButton variant="secondary">Explorar paleta</LButton>
    </div>

    <!-- Stats row -->
    <div class="stats-row">
      <div v-for="s in stats" :key="s.label" class="stat">
        <span class="stat__value">
          <span v-if="s.n === '02'" class="stat__accent">AA</span>
          <template v-if="s.value === 'AAA'">AA<span class="stat__accent">A</span></template>
          <template v-else-if="s.value === '6+'">6<span class="stat__accent">+</span></template>
          <template v-else>{{ s.value }}</template>
        </span>
        <span class="stat__label">{{ s.label }}</span>
      </div>
    </div>

    <!-- Princípios fundadores -->
    <section class="section">
      <h2 class="section__title">Princípios fundadores</h2>
      <hr class="section__divider" />
      <p class="section__lead">
        O Lume não nasceu como uma biblioteca de componentes — nasceu como uma
        resposta a barreiras reais documentadas em pesquisa com pessoas com baixa
        visão. Cada decisão de design tem origem nessas conversas e é validada
        pelas WCAG 2.2.
      </p>
      <div class="principles">
        <article v-for="p in principles" :key="p.n" class="principle">
          <span class="principle__num">{{ p.n }}</span>
          <h3 class="principle__title">{{ p.title }}</h3>
          <p class="principle__body">{{ p.body }}</p>
        </article>
      </div>
    </section>

    <!-- Callout -->
    <blockquote class="callout">
      Experimente agora: use os controles no header para alternar tema e tamanho
      da fonte. Toda a documentação se adapta — porque o site também é, ele
      mesmo, acessível.
    </blockquote>

    <!-- Base normativa -->
    <section class="section">
      <h2 class="section__title">Base normativa</h2>
      <hr class="section__divider" />
      <p class="section__lead">
        O Lume é desenvolvido com base nas
        <strong>WCAG 2.1 / 2.2</strong> (W3C), na
        <strong>Lei Brasileira de Inclusão</strong> (Lei n.º 13.146/2015) e na
        <strong>NBR 17060/2022</strong>. Cada componente lista os critérios
        específicos que atende.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.home {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
}

.home__breadcrumb {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--breadcrumb-fg);
  text-transform: uppercase;
  margin: 0;
}

.home__title {
  font-size: clamp(3rem, 5vw, 3.75rem);
  font-weight: 700;
  color: var(--fg-1);
  margin: 0;
  line-height: 1;
}

.home__dot { color: var(--accent); }

.home__desc {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--fg-1);
  max-width: 78ch;
  margin: 0;
}

.home__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

// Stats
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--stat-border);
  border-radius: t.$radius-md;
  overflow: hidden;
}

.stat {
  padding: 24px 28px;
  border-right: 1px solid var(--stat-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:last-child { border-right: none; }
}

.stat__value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  color: var(--stat-value-fg);
}

.stat__accent { color: var(--stat-accent-fg); }

.stat__label {
  font-size: 0.875rem;
  color: var(--stat-label-fg);
  line-height: 1.4;
}

// Section
.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
}

.section__divider {
  border: none;
  border-top: 1px solid var(--divider);
  margin: 0;
}

.section__lead {
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--fg-1);
  max-width: 84ch;
  margin: 0;
}

// Principle cards
.principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 900px) {
  .principles { grid-template-columns: repeat(2, 1fr); }
  .stats-row  { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .principles { grid-template-columns: 1fr; }
  .stats-row  { grid-template-columns: 1fr; }
}

.principle {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: var(--principle-bg);
  border: 1px solid var(--principle-border);
  border-radius: t.$radius-md;
}

.principle__num {
  font-size: 0.75rem;
  color: var(--principle-num-fg);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.principle__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--principle-title-fg);
  margin: 0;
}

.principle__body {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--principle-body-fg);
  margin: 0;
  max-width: 100%;
}

// Callout
.callout {
  padding: 16px 20px 16px 20px;
  background: var(--callout-bg);
  border-left: 4px solid var(--callout-border);
  border-radius: 0 t.$radius-sm t.$radius-sm 0;
  color: var(--callout-fg);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-style: normal;
}
</style>
