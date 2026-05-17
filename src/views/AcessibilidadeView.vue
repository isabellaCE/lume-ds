<script setup>
import DoDontPair from "@/components/ui/DoDontPair.vue";
import LButton from "@/components/ui/LButton.vue";
import LBadge from "@/components/ui/LBadge.vue";

const problems = [
  {
    n: "PROBLEMA 01",
    title: "Contraste insuficiente",
    desc: "Cinzas claros são esteticamente populares mas tornam textos secundários invisíveis para baixa visão. No Lume, todos os pares fg/bg passam por validação AAA.",
    doDemo: "text-contrast-do",
    dontDemo: "text-contrast-dont",
    doText: "Use #475569 mínimo. Razão de contraste sempre ≥ 7:1 para texto normal.",
    dontText: 'Cinzas #bbb sobre #fff têm razão 1,9:1 — falha até em AA. Não passe pelo "feeling minimalista".'
  },
  {
    n: "PROBLEMA 02",
    title: "Foco invisível",
    desc: "Designs modernos removendo outline:none deixam usuários de teclado completamente perdidos. No Lume, o anel de foco é uma feature — não um bug.",
    doDemo: "focus-do",
    dontDemo: "focus-dont",
    doText: "Anel de 3px sólido em #D4660A, com 3px de offset. Inegavelmente visível.",
    dontText: "Linha pontilhada de 1px desaparece em qualquer fundo. Nunca use outline:none sem alternativa."
  },
  {
    n: "PROBLEMA 03",
    title: "Cor como único significante",
    desc: "8% dos homens têm alguma forma de daltonismo. Estado vermelho/verde sem mais nada não comunica para uma parte significativa dos usuários.",
    doDemo: "color-do",
    dontDemo: "color-dont",
    doText: "Estados sempre carregam ícone + label + cor. Funciona em monocromático e para daltônicos.",
    dontText: "Bolinhas coloridas. Para um daltônico, são duas bolinhas idênticas."
  },
  {
    n: "PROBLEMA 04",
    title: "Texto muito pequeno",
    desc: "Corpos de 12–14px exigem acuidade visual que uma pessoa com baixa visão frequentemente não tem. O conforto de leitura começa em 20px.",
    doDemo: "size-do",
    dontDemo: "size-dont",
    doText: "Corpo mínimo de 20px, redimensionável até 200% sem quebrar layout.",
    dontText: "Texto de 12px disfarçado de detalhe. Ilegível até para visão normal em telas pequenas."
  },
  {
    n: "PROBLEMA 05",
    title: "Área de toque insuficiente",
    desc: "Alvos de toque pequenos excluem usuários com tremor, mobilidade reduzida e quem usa o celular em movimento.",
    doDemo: "target-do",
    dontDemo: "target-dont",
    doText: "Hit-target mínimo 48×48px (WCAG 2.5.5). Padrão Lume é 56px — confortável com tremor de mão.",
    dontText: "Botão de 24px exige precisão milimétrica. Acerta em 1 de cada 3 tentativas com tremor leve."
  },
  {
    n: "PROBLEMA 06",
    title: "Sem controle do usuário",
    desc: "Forçar tema, fonte e contraste fixos ignora que cada pessoa tem necessidades visuais únicas e mutáveis ao longo do dia.",
    doDemo: "ctrl-do",
    dontDemo: "ctrl-dont",
    doText: "Tema, fonte e contraste são escolhas do usuário, persistidas entre sessões e respeitando o sistema.",
    dontText: "Design system que não permite ajuste nenhum delega a responsabilidade para o usuário encontrar soluções externas."
  }
];
</script>

<template>
  <div class="page">
    <p class="breadcrumb">FOUNDATIONS / ACESSIBILIDADE</p>
    <h1 class="page-title">Acessibilidade no Lume</h1>
    <p class="page-desc">
      Os 6 problemas que o Lume foi construído para resolver — todos identificados
      em pesquisa com pessoas com baixa visão e validados nas WCAG.
    </p>

    <section v-for="p in problems" :key="p.n" class="problem">
      <div class="problem__header">
        <span class="problem__num">{{ p.n }}</span>
        <h2 class="problem__title">{{ p.title }}</h2>
        <hr class="problem__rule" />
        <p class="problem__desc" v-html="p.desc.replace(/outline:none/g, '<strong>outline:none</strong>')" />
      </div>

      <DoDontPair>
        <!-- Do -->
        <template #do-demo>
          <!-- PROBLEMA 01 -->
          <template v-if="p.doDemo === 'text-contrast-do'">
            <div class="demo-text-good">
              <div class="demo-input-mock">Texto de suporte com contraste 15,3:1 — confortável até com baixa visão severa.</div>
              <span class="demo-hint">Use #475569 mínimo. Razão de contraste sempre ≥ 7:1 para texto normal.</span>
            </div>
          </template>
          <!-- PROBLEMA 02 -->
          <template v-else-if="p.doDemo === 'focus-do'">
            <button class="demo-btn-focus">Botão com foco</button>
          </template>
          <!-- PROBLEMA 03 -->
          <template v-else-if="p.doDemo === 'color-do'">
            <div class="demo-badges">
              <LBadge state="success">Aprovado</LBadge>
              <LBadge state="reject">Rejeitado</LBadge>
            </div>
          </template>
          <!-- PROBLEMA 04 -->
          <template v-else-if="p.doDemo === 'size-do'">
            <span style="font-size:20px;font-weight:700;">Texto legível — 20px mínimo</span>
          </template>
          <!-- PROBLEMA 05 -->
          <template v-else-if="p.doDemo === 'target-do'">
            <button class="demo-btn-target-good">Confirmar (56px)</button>
          </template>
          <!-- PROBLEMA 06 -->
          <template v-else-if="p.doDemo === 'ctrl-do'">
            <span style="font-size:15px;">Tema + fonte controlados pelo usuário, persistidos em localStorage.</span>
          </template>
        </template>

        <template #do-text>{{ p.doText }}</template>

        <!-- Dont -->
        <template #dont-demo>
          <!-- PROBLEMA 01 -->
          <template v-if="p.dontDemo === 'text-contrast-dont'">
            <div class="demo-text-bad">
              <div class="demo-input-mock demo-input-mock--bad">Texto de suporte em cinza claro — bonito no Figma, ilegível na vida real.</div>
            </div>
          </template>
          <!-- PROBLEMA 02 -->
          <template v-else-if="p.dontDemo === 'focus-dont'">
            <button class="demo-btn-nofocus">Foco fraco</button>
          </template>
          <!-- PROBLEMA 03 -->
          <template v-else-if="p.dontDemo === 'color-dont'">
            <div class="demo-dots">
              <span class="demo-dot demo-dot--green" />
              <span class="demo-dot demo-dot--red" />
            </div>
          </template>
          <!-- PROBLEMA 04 -->
          <template v-else-if="p.dontDemo === 'size-dont'">
            <span style="font-size:12px;color:#bbb;">Texto em 12px "para não ocupar espaço"</span>
          </template>
          <!-- PROBLEMA 05 -->
          <template v-else-if="p.dontDemo === 'target-dont'">
            <button class="demo-btn-target-bad">OK (24px)</button>
          </template>
          <!-- PROBLEMA 06 -->
          <template v-else-if="p.dontDemo === 'ctrl-dont'">
            <span style="font-size:15px;color:#aaa;">Design fixo. Sem toggle de tema, sem ajuste de fonte.</span>
          </template>
        </template>

        <template #dont-text>{{ p.dontText }}</template>
      </DoDontPair>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.page { display: flex; flex-direction: column; gap: 48px; max-width: 1200px; }

.breadcrumb {
  font-size: 0.75rem; letter-spacing: 0.06em;
  color: var(--breadcrumb-fg); text-transform: uppercase; margin: 0;
}

.page-title { font-size: clamp(2.25rem,4vw,3rem); font-weight: 700; color: var(--fg-1); margin: 0; }

.page-desc { font-size: 1.25rem; line-height: 1.6; color: var(--fg-1); max-width: 80ch; margin: 0; }

.problem { display: flex; flex-direction: column; gap: 20px; }

.problem__header { display: flex; flex-direction: column; gap: 12px; }

.problem__num { font-size: 0.75rem; letter-spacing: 0.06em; color: var(--breadcrumb-fg); font-weight: 700; }

.problem__title { font-size: 1.5rem; font-weight: 700; color: var(--fg-1); margin: 0; }

.problem__rule { border: none; border-top: 1px solid var(--divider); margin: 0; }

.problem__desc { font-size: 1.125rem; line-height: 1.65; color: var(--fg-1); margin: 0; max-width: 84ch; }

/* Demo helpers */
.demo-text-good, .demo-text-bad { width: 100%; }
.demo-input-mock {
  padding: 12px; border: 1px solid var(--preview-border);
  border-radius: t.$radius-sm; background: transparent;
  font-size: 0.9375rem; color: var(--fg-2); line-height: 1.5;
}
.demo-input-mock--bad { color: #bbb; }
.demo-hint { font-size: 0.8125rem; color: var(--fg-3); margin-top: 8px; display: block; }

.demo-btn-focus {
  padding: 12px 24px; background: transparent;
  border: 2px solid var(--accent); border-radius: t.$radius-md;
  font-family: t.$font-sans; font-weight: 700; font-size: 1rem;
  cursor: pointer; color: var(--fg-1);
  outline: 3px solid var(--accent); outline-offset: 3px;
}

.demo-btn-nofocus {
  padding: 12px 24px; background: var(--bg-surface);
  border: 1px dashed var(--fg-3); border-radius: t.$radius-md;
  font-family: t.$font-sans; font-weight: 700; font-size: 1rem;
  cursor: pointer; color: var(--fg-1); outline: none;
}

.demo-badges { display: flex; gap: 12px; flex-wrap: wrap; }

.demo-dots { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.demo-dot { width: 20px; height: 20px; border-radius: 50%; }
.demo-dot--green { background: #16a34a; }
.demo-dot--red   { background: #dc2626; }

[data-theme="hc"] .demo-dot--green,
[data-theme="hc"] .demo-dot--red   { background: var(--accent); }

.demo-btn-target-good {
  height: 56px; padding: 0 28px;
  background: var(--btn-primary-bg); color: var(--btn-primary-fg);
  border: none; border-radius: t.$radius-md;
  font-family: t.$font-sans; font-weight: 700; font-size: 1.125rem; cursor: pointer;
}

.demo-btn-target-bad {
  height: 24px; padding: 0 12px;
  background: var(--bg-elevated); color: var(--fg-3);
  border: 1px dashed var(--fg-3); border-radius: t.$radius-sm;
  font-family: t.$font-sans; font-size: 0.75rem; cursor: pointer;
}
</style>
