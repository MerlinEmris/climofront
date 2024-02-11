import { defineStore } from "pinia";
import { Notify } from "quasar";
import { LocalStorage } from "quasar";

export const useNewsStore = defineStore("news", {
  state: () => ({
    page: {},
    news: [],
    newItem: {}
  }),
  actions: {
    setPage(page) {
      this.page = page;
    },
    setNews(news) {
      this.news = news;
    },
    setNewItem(newItem){
      this.newItem = newItem
    }
  },
});
