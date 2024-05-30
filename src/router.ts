import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/calculator",
    component: () => import("./components/calculator/Calculator.vue"),
  },
  {
    path: "/userlist",
    component: () => import("./components/user-list/UserList.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
