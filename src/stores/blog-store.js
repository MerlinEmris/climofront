import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    page: {},
    blogs: [],
    blogItem: {},
  }),
  actions: {
    setPage(page) {
      this.page = page;
    },
    setBlogs(blogs) {
      this.blogs = blogs;
    },
    setBlogItem(blogItem) {
      this.blogItem = blogItem;
    },
  },
});
