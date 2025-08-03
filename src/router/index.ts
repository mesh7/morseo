import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "../views/HomePage/HomePage.vue";
import CodePage from "../views/CodePage/CodePage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/code-page",  name: "CodePage", component: CodePage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
