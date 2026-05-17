<script setup>
import LPage from "@/components/ui/LPage.vue";
import LButton from "@/components/ui/LButton.vue";
import LCard from "@/components/ui/LCard.vue";
import LBadge from "@/components/ui/LBadge.vue";

const examples = [
  {
    do: {
      title: "Hierarquia clara",
      body: "Uma primary, opções secundárias com peso similar e foco visível em tudo."
    },
    dont: {
      title: "Tudo com mesma cor",
      body: "Sem hierarquia, usuário não sabe qual ação é a principal."
    }
  },
  {
    do: {
      title: "Status com ícone + label",
      body: "Cor é reforço, não a única informação."
    },
    dont: {
      title: "Status só por cor",
      body: "Pessoas daltônicas e leitores de tela perdem a informação."
    }
  }
];
</script>

<template>
  <LPage description="Pares Faça / Não faça extraídos do .fig — anti-padrões comuns e como resolver.">
    <section v-for="(ex, i) in examples" :key="i" class="section">
      <h2>{{ ex.do.title }}</h2>
      <div class="pair">
        <article class="cell cell--do">
          <span class="tag">FAÇA</span>
          <div class="cell__demo">
            <LButton v-if="i===0" variant="primary">Salvar</LButton>
            <LButton v-if="i===0" variant="tertiary">Cancelar</LButton>
            <LBadge v-if="i===1" state="success">Aprovado</LBadge>
            <LBadge v-if="i===1" state="reject">Rejeitado</LBadge>
          </div>
          <p>{{ ex.do.body }}</p>
        </article>
        <article class="cell cell--dont">
          <span class="tag">NÃO FAÇA</span>
          <div class="cell__demo">
            <LButton v-if="i===0" variant="primary">Salvar</LButton>
            <LButton v-if="i===0" variant="primary">Cancelar</LButton>
            <span v-if="i===1" class="dot dot--ok" />
            <span v-if="i===1" class="dot dot--bad" />
          </div>
          <p>{{ ex.dont.body }}</p>
        </article>
      </div>
    </section>
  </LPage>
</template>

<style scoped>
.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}
@media (max-width: 720px) {
  .pair { grid-template-columns: 1fr; }
}

.cell {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  border-radius: var(--radius-md);
  border: var(--border-2) solid;
}

.cell--do   { background: var(--success-bg); border-color: var(--success-border); color: var(--success-fg); }
.cell--dont { background: var(--danger-bg);  border-color: var(--danger-border);  color: var(--danger-fg);  }

.tag {
  align-self: flex-start;
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
}

.cell__demo {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  flex-wrap: wrap;
  padding: var(--space-4);
  background: var(--bg-surface);
  color: var(--fg-1);
  border-radius: var(--radius-sm);
}

.cell p { margin: 0; font-size: var(--text-base); }

.dot { width: 24px; height: 24px; border-radius: 9999px; display: inline-block; }
.dot--ok  { background: #16a34a; }
.dot--bad { background: #dc2626; }
</style>
