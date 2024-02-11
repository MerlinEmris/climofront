<template>
  <q-page class="flex column">
    <div class="text-center"><h4>News</h4></div>
    <NewsList :news-list="news" />
<!--    <pagination></pagination>-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useNewsStore } from "stores/news-store";
import { computed } from "vue";
import { getNews } from "components/news/service/newsService";
import { useQuasar } from "quasar";
import NewsList from "components/news/NewsList.vue";

export default defineComponent({
  name: "NewsListPage",
  components: { NewsList},
  setup() {
    const store = useNewsStore();
    const $q = useQuasar();

    getNews(1);

    const news = computed(() => store.news);
    const page = computed(() => store.page);
    return { news, page };
  },
});
</script>
