import { api } from "boot/axios";
import { Notify } from "quasar";
import { Loading } from "quasar";
import { useBlogStore } from "src/stores/blog-store";

export async function getBlogs(page) {
  try {
    const newsStore = useBlogStore();
    Loading.show();
    const response = await api.get(`/api/blogs?page=${page}`, {});
    const news = response.data.results;
    console.log(news);

    // const page = {
    //   total: response.data.total,
    //   page: response.data.page,
    //   page_size: response.data.page_size,
    // };
    newsStore.setBlogs(news);
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

export async function getBlog(id) {
  try {
    const newsStore = useBlogStore();
    Loading.show();
    const response = await api.get(`/api/blogs/${id}`, {});
    const newItem = response.data;

    // const page = {
    //   total: response.data.total,
    //   page: response.data.page,
    //   page_size: response.data.page_size,
    // };
    newsStore.setBlogItem(newItem);
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
