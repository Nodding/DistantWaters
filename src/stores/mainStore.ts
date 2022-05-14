/*
 * File: mainStore.ts
 * Created Date: 04-27-2022
 * Last Modified: Fri May 13 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */
import { defineStore } from "pinia";

export enum PageView {
  MainPage,
  AboutPage,
  GamePage,
}

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    page: PageView.MainPage,
  }),
  getters: {
    View: (state) => state.page,
  },
  actions: {},
});
