<template>
  <q-page class="flex column">
    <div class="text-center"><h4>News</h4></div>
    <div class="q-pa-md row items-center justify-center q-gutter-md">
      <q-card class="my-card" v-for="(a, index) in news" :key="index">
        <img src="../../assets/yahchal.png" height="340" />

        <q-card-section>
          <div class="text-h6">{{ a?.name }}</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useNewsStore } from "stores/news-store";
import { computed } from "vue";
import { getNews } from "components/news/service/newsService";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "NewsListPage",
  setup() {
    const store = useNewsStore();
    const $q = useQuasar();

    getNews({ page: 1 });

    const news = computed(() => store.news);
    const page = computed(() => store.page);
    return { news, page };
  },
});
</script>
