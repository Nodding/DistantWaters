/*
 * File: Router.ts
 * Created Date: 05-09-2022
 * Last Modified: Fri May 13 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: import("@/pages/MainPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: import("@/pages/AboutPage.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: import("@/pages/GamePage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
