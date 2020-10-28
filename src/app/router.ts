import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { paths } from "@/shared/statics";

const routes: Array<RouteRecordRaw> = [
  {
    path: paths.home,
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
  },
  {
    path: paths.memory,
    name: "Memory",
    component: () =>
      import(/* webpackChunkName: "memory" */ "./views/Memory.vue")
  },
  {
    path: paths.ticTacToe,
    name: "TicTacToe",
    component: () =>
      import(/* webpackChunkName: "tic-tac-toe" */ "./views/TicTacToe.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
