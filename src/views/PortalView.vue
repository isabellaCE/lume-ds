<script setup>
import { ref, computed } from "vue";
import LButton   from "@/components/ui/LButton.vue";
import LAlert    from "@/components/ui/LAlert.vue";
import LBadge    from "@/components/ui/LBadge.vue";
import LCard     from "@/components/ui/LCard.vue";
import LInput    from "@/components/ui/LInput.vue";
import LTag      from "@/components/ui/LTag.vue";
import LSnackbar from "@/components/ui/LSnackbar.vue";

// ── Chamados ──────────────────────────────────────────────────────────────────
const nextCode = ref(2042);
const tickets  = ref([
  {
    id: 1, code: "#2041",
    category: "TI / INFRAESTRUTURA",
    title: "Computador não inicializa após atualização",
    desc: "Após a atualização do sistema na última quinta-feira, o computador da recepção não consegue mais carregar o Windows.",
    status: "analysis",
    tags: [{ label: "Hardware", tone: "blue" }, { label: "Urgente", tone: "green" }],
    date: "14/05/2026",
  },
  {
    id: 2, code: "#2038",
    category: "RH / BENEFÍCIOS",
    title: "Desconto incorreto na folha de pagamento",
    desc: "O desconto do vale-refeição de abril foi aplicado em dobro, gerando um saldo negativo inesperado na conta.",
    status: "pending",
    tags: [{ label: "Folha", tone: "blue" }],
    date: "12/05/2026",
  },
  {
    id: 3, code: "#2035",
    category: "TI / INFRAESTRUTURA",
    title: "Impressora da sala de reuniões offline",
    desc: "A HP LaserJet da sala principal não aparece na rede desde a última sexta-feira. Teste de ping sem resposta.",
    status: "analysis",
    tags: [{ label: "Rede", tone: "blue" }],
    date: "10/05/2026",
  },
  {
    id: 4, code: "#2031",
    category: "FACILITIES",
    title: "Ar-condicionado com defeito — Sala 3B",
    desc: "O aparelho está fazendo barulho excessivo e não refrigera adequadamente. Temperatura acima de 28 °C.",
    status: "success",
    tags: [{ label: "Manutenção", tone: "blue" }],
    date: "08/05/2026",
  },
  {
    id: 5, code: "#2028",
    category: "TI / ACESSO",
    title: "Permissão de acesso ao módulo de relatórios",
    desc: "Necessito de permissão de leitura para o módulo de relatórios do sistema de gestão de pessoas.",
    status: "reject",
    tags: [{ label: "Permissão", tone: "blue" }, { label: "Sistema", tone: "blue" }],
    date: "05/05/2026",
  },
]);

// ── Estatísticas ──────────────────────────────────────────────────────────────
const stats = computed(() => [
  {
    meta: "TOTAL DE CHAMADOS",
    value: tickets.value.length,
    desc: "registrados no período",
  },
  {
    meta: "PENDENTES",
    value: tickets.value.filter(t => t.status === "pending").length,
    desc: "aguardando atendimento",
  },
  {
    meta: "EM ANÁLISE",
    value: tickets.value.filter(t => t.status === "analysis").length,
    desc: "em andamento",
  },
  {
    meta: "ENCERRADOS",
    value: tickets.value.filter(t => ["success", "reject"].includes(t.status)).length,
    desc: "resolvidos ou recusados",
  },
]);

// ── Filtros ───────────────────────────────────────────────────────────────────
const filters       = ["Todos", "TI", "RH", "Facilities"];
const activeFilter  = ref("Todos");

const filteredTickets = computed(() => {
  if (activeFilter.value === "Todos") return tickets.value;
  return tickets.value.filter(t => t.category.includes(activeFilter.value));
});

// ── Snackbar ──────────────────────────────────────────────────────────────────
const sbVisible = ref(false);
const sbType    = ref("success");
const sbMsg     = ref("");

function showSnackbar(type, msg) {
  sbType.value    = type;
  sbMsg.value     = msg;
  sbVisible.value = true;
  setTimeout(() => { sbVisible.value = false; }, 3500);
}

// ── Formulário — novo chamado ─────────────────────────────────────────────────
const formOpen    = ref(false);
const fTitulo     = ref("");
const fCategoria  = ref("");
const fDesc       = ref("");
const fUrgencia   = ref("normal");
const eTitulo     = ref("");
const eDesc       = ref("");

function openForm() { formOpen.value = true; }

function cancelForm() {
  formOpen.value = false;
  fTitulo.value = fCategoria.value = fDesc.value = "";
  fUrgencia.value = "normal";
  eTitulo.value = eDesc.value = "";
}

function submitForm() {
  eTitulo.value = fTitulo.value.trim() ? "" : "Título é obrigatório.";
  eDesc.value   = fDesc.value.trim()   ? "" : "Descrição é obrigatória.";

  if (eTitulo.value || eDesc.value) {
    showSnackbar("danger", "Preencha os campos obrigatórios antes de enviar.");
    return;
  }

  const urgTags = fUrgencia.value === "urgent" ? [{ label: "Urgente", tone: "green" }] : [];
  const catTags = fCategoria.value.trim()
    ? [{ label: fCategoria.value.trim(), tone: "blue" }]
    : [];

  tickets.value.unshift({
    id:       Date.now(),
    code:     `#${nextCode.value++}`,
    category: fCategoria.value.toUpperCase() || "GERAL",
    title:    fTitulo.value,
    desc:     fDesc.value,
    status:   "pending",
    tags:     [...urgTags, ...catTags],
    date:     new Date().toLocaleDateString("pt-BR"),
  });

  showSnackbar("success", `Chamado "${fTitulo.value}" aberto com sucesso!`);
  cancelForm();
}
</script>

<template>
  <div class="page">

    <!-- Aviso de manutenção -------------------------------------------------- -->
    <LAlert type="warning" title="Manutenção programada">
      O sistema ficará indisponível na
      <strong>sexta-feira, 22/05, das 22h às 02h</strong>.
      Salve seu trabalho antes desse período.
    </LAlert>

    <!-- Cabeçalho + CTA ------------------------------------------------------ -->
    <div class="page-header">
      <div class="page-intro">
        <h1 class="page-title">Portal do Colaborador</h1>
        <p class="page-subtitle">
          Abra e acompanhe solicitações de TI, RH e Facilities em tempo real.
        </p>
      </div>
      <LButton v-if="!formOpen" variant="primary" @click="openForm">
        + Abrir chamado
      </LButton>
    </div>

    <!-- Estatísticas ---------------------------------------------------------- -->
    <div class="stats-grid" role="list" aria-label="Resumo dos chamados">
      <div
        v-for="s in stats"
        :key="s.meta"
        class="stat-card"
        role="listitem"
      >
        <span class="stat-meta">{{ s.meta }}</span>
        <span class="stat-value">{{ s.value }}</span>
        <span class="stat-desc">{{ s.desc }}</span>
      </div>
    </div>

    <!-- Formulário de novo chamado ------------------------------------------- -->
    <Transition name="form-slide">
      <section v-if="formOpen" class="form-section" aria-label="Novo chamado">
        <h2 class="section-title">Novo Chamado</h2>

        <form class="form" @submit.prevent="submitForm" novalidate>
          <div class="form-row-2">
            <LInput
              v-model="fTitulo"
              label="Título *"
              placeholder="Descreva brevemente o problema"
              :error="eTitulo"
            />
            <LInput
              v-model="fCategoria"
              label="Categoria"
              placeholder="Ex: TI, RH, Facilities"
              hint="Ajuda a encaminhar ao time correto."
            />
          </div>

          <LInput
            v-model="fDesc"
            label="Descrição *"
            placeholder="Detalhe o problema, quando ocorreu e o impacto…"
            :error="eDesc"
          />

          <div class="urgency-row">
            <span class="urgency-label">Urgência</span>
            <div class="btn-group">
              <LButton
                type="button"
                :variant="fUrgencia === 'normal' ? 'primary' : 'secondary'"
                size="sm"
                @click="fUrgencia = 'normal'"
              >Normal</LButton>
              <LButton
                type="button"
                :variant="fUrgencia === 'urgent' ? 'primary' : 'secondary'"
                size="sm"
                @click="fUrgencia = 'urgent'"
              >Urgente</LButton>
            </div>
          </div>

          <div class="btn-group">
            <LButton type="submit" variant="primary">Enviar chamado</LButton>
            <LButton type="button" variant="ghost" @click="cancelForm">Cancelar</LButton>
          </div>
        </form>
      </section>
    </Transition>

    <!-- Lista de chamados ---------------------------------------------------- -->
    <section aria-labelledby="tickets-heading">
      <div class="list-header">
        <h2 id="tickets-heading" class="section-title">Meus Chamados</h2>

        <div class="filters" role="group" aria-label="Filtrar por área">
          <LButton
            v-for="f in filters"
            :key="f"
            :variant="activeFilter === f ? 'primary' : 'ghost'"
            size="sm"
            @click="activeFilter = f"
          >{{ f }}</LButton>
        </div>
      </div>

      <TransitionGroup name="ticket-list" tag="div" class="ticket-grid">
        <LCard
          v-for="t in filteredTickets"
          :key="t.id"
          :meta="`${t.code}  ·  ${t.category}`"
          :title="t.title"
          link-text="Ver detalhes"
          link-href="#"
        >
          <p class="ticket-desc">{{ t.desc }}</p>
          <div class="ticket-footer">
            <LBadge :state="t.status" />
            <div class="tag-row">
              <LTag
                v-for="tag in t.tags"
                :key="tag.label"
                :tone="tag.tone"
              >{{ tag.label }}</LTag>
            </div>
          </div>
          <p class="ticket-date">Aberto em {{ t.date }}</p>
        </LCard>
      </TransitionGroup>

      <p v-if="filteredTickets.length === 0" class="empty-state">
        Nenhum chamado encontrado para esta área.
      </p>
    </section>

  </div>

  <!-- Snackbar fixo ---------------------------------------------------------- -->
  <Transition name="snack">
    <div v-if="sbVisible" class="snackbar-dock">
      <div class="snackbar-inner">
        <LSnackbar :type="sbType">{{ sbMsg }}</LSnackbar>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

// ── Layout base ───────────────────────────────────────────────────────────────
.page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
}

// ── Cabeçalho ────────────────────────────────────────────────────────────────
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.page-intro { display: flex; flex-direction: column; gap: 6px; }

.page-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: var(--fg-1);
  margin: 0;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--fg-2);
  margin: 0;
}

// ── Estatísticas ──────────────────────────────────────────────────────────────
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
  gap: 16px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  background: var(--bg-surface);
  border: 1px solid var(--ctrl-border);
  border-radius: t.$radius-lg;
}

.stat-meta {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: .08em;
  color: var(--fg-muted);
  text-transform: uppercase;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--fg-1);
}

.stat-desc {
  font-size: 0.8125rem;
  color: var(--fg-3);
}

// ── Formulário ────────────────────────────────────────────────────────────────
.form-section {
  background: var(--bg-surface);
  border: 1px solid var(--ctrl-border);
  border-radius: t.$radius-lg;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--fg-1);
  margin: 0;
}

.form { display: flex; flex-direction: column; gap: 16px; }

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 560px) { grid-template-columns: 1fr; }
}

.urgency-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.urgency-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--fg-2);
}

.btn-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

// ── Lista de chamados ─────────────────────────────────────────────────────────
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.filters { display: flex; gap: 8px; flex-wrap: wrap; }

.ticket-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.ticket-desc {
  font-size: 0.875rem;
  color: var(--fg-2);
  line-height: 1.55;
  margin: 0 0 14px;
}

.ticket-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tag-row { display: flex; gap: 6px; flex-wrap: wrap; }

.ticket-date {
  font-size: 0.75rem;
  color: var(--fg-muted);
  margin: 10px 0 0;
}

.empty-state {
  text-align: center;
  color: var(--fg-3);
  padding: 56px 0;
  font-size: 1rem;
}

// ── Snackbar dock (fixo na tela) ──────────────────────────────────────────────
.snackbar-dock {
  position: fixed;
  bottom: 28px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 200;
  pointer-events: none;
}

.snackbar-inner {
  pointer-events: auto;
  width: min(520px, calc(100vw - 48px));
}

// ── Transições ────────────────────────────────────────────────────────────────
.form-slide-enter-active,
.form-slide-leave-active { transition: opacity .25s ease, transform .3s ease; }
.form-slide-enter-from,
.form-slide-leave-to     { opacity: 0; transform: translateY(-10px); }

.snack-enter-active,
.snack-leave-active { transition: opacity .25s ease, transform .25s ease; }
.snack-enter-from,
.snack-leave-to     { opacity: 0; transform: translateY(10px); }

.ticket-list-enter-active  { transition: opacity .3s ease, transform .3s ease; }
.ticket-list-enter-from    { opacity: 0; transform: translateY(10px); }
.ticket-list-leave-active  { transition: opacity .2s ease; position: absolute; }
.ticket-list-leave-to      { opacity: 0; }
.ticket-list-move          { transition: transform .3s ease; }
</style>
