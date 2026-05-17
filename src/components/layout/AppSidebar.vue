<script setup>
import { RouterLink, useRoute } from "vue-router";
import LIcon from "@/components/ui/LIcon.vue";
import { useTheme } from "@/composables/useTheme";

const route = useRoute();
const { theme } = useTheme();

const sections = [
  {
    label: "INÍCIO",
    items: [
      { to: "/",             label: "Início",        icon: "home" },
      { to: "/acessibilidade", label: "Acessibilidade", icon: "access" }
    ]
  },
  {
    label: "BASE",
    items: [
      { to: "/foundations/colors",  label: "Cores",        icon: "color" },
      { to: "/foundations/typo",    label: "Tipografia",   icon: "font" },
      { to: "/foundations/spacing", label: "Espaçamento",  icon: "spacing" }
    ]
  },
  {
    label: "COMPONENTES",
    items: [
      { to: "/components/button", label: "Botão",  icon: "button" },
      { to: "/components/input",  label: "Campo",  icon: "input" },
      { to: "/components/link",   label: "Link",   icon: "link" },
      { to: "/components/alert",  label: "Alerta", icon: "alert" },
      { to: "/components/badge",  label: "Badge",  icon: "badge" },
      { to: "/components/card",   label: "Card",   icon: "card" }
    ]
  },
  {
    label: "DEMO",
    items: [
      { to: "/portal",    label: "Portal",    icon: "info"         },
      { to: "/validacao", label: "Validação", icon: "check-circle" }
    ]
  }
];

function isActive(to) {
  if (to === "/") return route.path === "/";
  return route.path.startsWith(to);
}
</script>

<template>
  <aside class="sidebar" aria-label="Navegação principal">
    <nav>
      <template v-for="(sec, si) in sections" :key="sec.label">
        <hr v-if="si > 0" class="sidebar__divider" />
        <div class="sidebar__section">
          <span class="sidebar__label">{{ sec.label }}</span>
          <ul class="sidebar__list">
            <li v-for="item in sec.items" :key="item.to">
              <RouterLink
                :to="item.to"
                class="sidebar__item"
                :class="{ 'sidebar__item--active': isActive(item.to) }"
              >
                <LIcon :name="item.icon" :size="20"
                  :color="isActive(item.to) ? 'var(--sidebar-active-icon)' : 'var(--sidebar-item-fg)'"
                />
                <span>{{ item.label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </template>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
@use "@/styles/tokens" as t;

.sidebar {
  width: t.$sidebar-w;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--sidebar-border);
  padding: 20px 12px;
  overflow-y: auto;
  min-height: 100%;
}

.sidebar__divider {
  border: none;
  border-top: 1px solid var(--sidebar-divider);
  margin: 12px 4px;
}

.sidebar__section { margin-bottom: 4px; }

.sidebar__label {
  display: block;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--sidebar-label-fg);
  padding: 10px 12px 6px;
  text-transform: uppercase;
}

.sidebar__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: t.$radius-md;
  color: var(--sidebar-item-fg);
  text-decoration: none;
  font-size: 0.9375rem;
  min-height: 40px;
  transition: background .15s, color .15s;

  &:hover {
    background: var(--sidebar-item-hover-bg);
    color: var(--fg-1);
  }

  &--active {
    background: var(--sidebar-active-bg);
    color: var(--sidebar-active-fg);
    font-weight: 700;
  }
}
</style>
