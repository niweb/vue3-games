import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MemoryBoard",
    component: () =>
      import(/* webpackChunkName: "memory" */ "./views/Memory.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
