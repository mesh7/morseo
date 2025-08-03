import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "../views/HomePage/HomePage.vue";
import CodePage from "../views/CodePage/CodePage.vue";
import MorseChart from "../views/MorseChart/MorseChart.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/code-page",  name: "CodePage", component: CodePage },
  { path: "/morse-chart",  name: "MorseChart", component: MorseChart },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
