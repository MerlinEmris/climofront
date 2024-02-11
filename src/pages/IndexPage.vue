<template>
  <q-page>
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      swipeable
      autoplay
    >
      <q-carousel-slide :name="1" img-src="../assets/1.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/2.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/3.jpg" />
      <q-carousel-slide :name="4" img-src="../assets/4.jpg" />
    </q-carousel>
    <h3 class="text-center">News</h3>
    <NewsList :news-list="news" />
    <h3 class="text-center">Posts</h3>
    <BlogList :news-list="blogs" />
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import NewsList from "components/news/NewsList.vue";
import { useNewsStore } from "stores/news-store";
import { useQuasar } from "quasar";
import { getNews } from "components/news/service/newsService";
import { useBlogStore } from "src/stores/blog-store";
import { getBlogs } from "src/components/blog/service/blogService";
import BlogList from "src/components/blog/BlogList.vue";

export default defineComponent({
  name: "IndexPage",
  components: { NewsList, BlogList },
  setup() {
    const slide = ref(1);
    const store = useNewsStore();
    const store2 = useBlogStore();
    const $q = useQuasar();

    getNews(1);
    getBlogs(1);

    const blogs = computed(() => store2.blogs);
    const news = computed(() => store.news);
    return { slide, news, blogs };
  },
});
</script>
