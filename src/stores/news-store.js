import { defineStore } from "pinia";
import { Notify } from "quasar";
import { LocalStorage } from "quasar";

export const useNewsStore = defineStore("news", {
  state: () => ({
    page: {},
    news: {},
  }),
  actions: {
    setPage(page) {
      this.page = page;
    },
    setNews(news) {
      this.news = news;
    },
  },
});
