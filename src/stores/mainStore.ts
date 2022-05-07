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
