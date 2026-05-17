import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/",                     name: "home",         component: () => import("../views/HomeView.vue"),                          meta: { label: "Início" } },
  { path: "/acessibilidade",       name: "access",       component: () => import("../views/AcessibilidadeView.vue"),               meta: { label: "Acessibilidade" } },
  { path: "/foundations/colors",   name: "colors",       component: () => import("../views/foundations/ColorsView.vue"),           meta: { label: "Cores" } },
  { path: "/foundations/typo",     name: "typography",   component: () => import("../views/foundations/TypographyView.vue"),       meta: { label: "Tipografia" } },
  { path: "/foundations/spacing",  name: "spacing",      component: () => import("../views/foundations/SpacingView.vue"),          meta: { label: "Espaçamento" } },
  { path: "/components/button",    name: "button",       component: () => import("../views/components/ButtonView.vue"),            meta: { label: "Botão" } },
  { path: "/components/input",     name: "input",        component: () => import("../views/components/InputView.vue"),             meta: { label: "Campo" } },
  { path: "/components/link",      name: "link",         component: () => import("../views/components/LinkView.vue"),              meta: { label: "Link" } },
  { path: "/components/alert",     name: "alert",        component: () => import("../views/components/AlertView.vue"),             meta: { label: "Alerta" } },
  { path: "/components/badge",     name: "badge",        component: () => import("../views/components/BadgeView.vue"),             meta: { label: "Badge" } },
  { path: "/components/card",      name: "card",         component: () => import("../views/components/CardView.vue"),              meta: { label: "Card" } },
  { path: "/portal",               name: "portal",       component: () => import("../views/PortalView.vue"),                       meta: { label: "Portal Demo" } },
  { path: "/validacao",             name: "validacao",    component: () => import("../views/ValidacaoView.vue"),                    meta: { label: "Validação" } },
  { path: "/:catchAll(.*)",        redirect: "/" }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});

router.afterEach((to) => {
  document.title = to.meta?.label ? `${to.meta.label} — Lume DS` : "Lume — Design System";
});

export default router;
