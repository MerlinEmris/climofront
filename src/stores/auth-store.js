import { defineStore } from "pinia";
import { Notify } from "quasar";
import { LocalStorage } from "quasar";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: LocalStorage.getItem("token") || null,
    refresh: LocalStorage.getItem("refresh") || null,
    user: {},
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },

    setToken(token) {
      this.token = token;
      LocalStorage.set("token", token);
    },

    removeToken() {
      this.token = null;
      LocalStorage.remove("token");
    },

    setRefresh(refresh) {
      this.refresh = refresh;
      LocalStorage.set("refresh", refresh);
    },

    removeRefresh() {
      this.refresh = null;
      LocalStorage.remove("refresh");
    },

    logout() {
      this.removeRefresh();
      this.removeToken();
    },
  },
});
