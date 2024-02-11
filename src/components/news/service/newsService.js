import { api } from "boot/axios";
import { useNewsStore } from "stores/news-store";
import { Notify } from "quasar";
import { Loading } from "quasar";

export async function getNews(page) {
  try {
    const newsStore = useNewsStore();
    Loading.show();
    const response = await api.get(`/api/news?page=${page}`, {
    });
    const news = response.data.results;

    // const page = {
    //   total: response.data.total,
    //   page: response.data.page,
    //   page_size: response.data.page_size,
    // };
    newsStore.setNews(news);
    // newsStore.setPage(page);

    return news;
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

export async function getNew(id) {
  try {
    const newsStore = useNewsStore();
    Loading.show();
    const response = await api.get(`/api/news/${id}`, {
    });
    const newItem = response.data;

    // const page = {
    //   total: response.data.total,
    //   page: response.data.page,
    //   page_size: response.data.page_size,
    // };
    newsStore.setNewItem(newItem);
    // newsStore.setPage(page);

    return newItem;
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
