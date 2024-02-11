<template>
  <q-page class="flex column">
    <div class="text-center"><h4>Posts</h4></div>
    <BlogList :news-list="blogs" />
    <!--    <pagination></pagination>-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useBlogStore } from "stores/blog-store";
import { computed } from "vue";
import { getBlogs } from "components/blog/service/blogService";
import { useQuasar } from "quasar";
import BlogList from "src/components/blog/BlogList.vue";

export default defineComponent({
  name: "BlogListPage",
  components: { BlogList },
  setup() {
    const store = useBlogStore();
    const $q = useQuasar();

    getBlogs(1);

    const blogs = computed(() => store.blogs);
    const page = computed(() => store.page);
    return { blogs, page };
  },
});
</script>
