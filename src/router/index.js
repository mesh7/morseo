import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import CodePage from "../views/CodePage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/code-page", component: CodePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
