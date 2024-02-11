import { api } from "boot/axios";
import { useAuthStore } from "stores/auth-store";
import { Notify } from "quasar";
import { Loading } from "quasar";

export async function login(email, password) {
  try {
    const authStore = useAuthStore();
    Loading.show();
    const response = await api.post("/auth/login/", {
      email,
      password,
    });
    const token = response.data?.tokens.access;
    const refresh = response.data?.tokens.refresh;
    const user = {email: response.data.email, username: response.data.fullname}
    authStore.setUser(user)
    authStore.setToken(token);
    authStore.setRefresh(refresh);
    Notify.create({
      color: "positive",
      position: "bottom",
      message: "Logged in!",
      icon: "check",
    });
    // await getUser();
    return token;
  } catch (error) {
    Notify.create({
      color: "negative",
      position: "bottom",
      message: "Loading failed",
      icon: "report_problem",
    });
    throw error;
  } finally {
    Loading.hide();
  }
}

export async function register(email, username, password) {
  try {
    const authStore = useAuthStore();
    Loading.show();
    const response = await api.post("/auth/login/register/", {
      phone: email,
      username,
      password,
    });
    const token = response.data?.access;
    const refresh = response.data?.refresh;
    authStore.setToken(token);
    authStore.setRefresh(refresh);
    Notify.create({
      color: "positive",
      position: "bottom",
      message: "Check your email!",
      icon: "check",
    });
    return token;
  } catch (error) {
    Notify.create({
      color: "negative",
      position: "bottom",
      message: "Loading failed",
      icon: "report_problem",
    });
    throw error;
  } finally {
    Loading.hide();
  }
}

export function logout() {
  const authStore = useAuthStore();
  authStore.removeToken();
  Notify.create({
    color: "positive",
    position: "bottom",
    message: "Logged out!",
    icon: "check",
  });
}

export async function getUser() {
  try {
    const authStore = useAuthStore();
    Loading.show();
    // const response = await api.post("/api/v1/auth/getuser").then((response) => {
    //   authStore.setUser(response.data.user);
    // });
    const user = {
      email: "merdanecofriendly@eco.tm",
      username: "Ecolover",
      image: "",
    };
    authStore.setUser(user);
  } catch (error) {
    Notify.create({
      color: "negative",
      position: "bottom",
      message: "Loading failed",
      icon: "report_problem",
    });
    throw error;
  } finally {
    Loading.hide();
  }
}
