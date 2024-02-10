import { api } from "boot/axios";
import { useNewsStore } from "stores/news-store";
import { Notify } from "quasar";

const demoNewsResponse = {
  data: {
    next: null,
    previous: null,
    total: 2,
    page: 1,
    page_size: 10,
    results: [
      {
        id: 1,
        name: "goshgy",
        length: 100,
        audio:
          "http://127.0.0.1:8000/media/Poems/2023/12/06/quote-design-world-smile-day-on-yellow-vector-26640875_1.jpg",
        created_at: "2023-12-06T10:46:39.188954Z",
      },
      {
        id: 2,
        name: "ansdjnsajkndkjd",
        length: 100,
        audio:
          "http://127.0.0.1:8000/media/Poems/2023/12/06/funny-yellow-emoji-banner-enjoy-every-moment-quote-vector-27324774.jpg",
        created_at: "2023-12-06T10:46:55.624175Z",
      },
    ],
  },
};

export async function getNews(page) {
  try {
    const newsStore = useNewsStore();
    // const response = await api.post("/api/news", {
    //   page: page,
    // });
    const response = demoNewsResponse;
    const news = response.data.results;

    const page = {
      total: response.data.total,
      page: response.data.page,
      page_size: response.data.page_size,
    };
    newsStore.setNews(news);
    newsStore.setPage(page);
    return news;
  } catch (error) {
    Notify.create({
      color: "negative",
      position: "bottom",
      message: "Loading failed",
      icon: "report_problem",
    });
    throw error;
  }
}

export async function register(email, username, password) {
  try {
    const authStore = useAuthStore();
    const response = await api.post("/api/v1/auth/register", {
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
  }
}
