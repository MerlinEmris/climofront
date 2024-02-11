<template>
  <q-card class="my-card">
    <div class="bg-blue-3 text-center no-padding no-margin">
      <q-img :src="newsItem?.image" :ratio="2 / 1" />
    </div>

    <q-card-section class="flex items-center justify-center">
      <div class="text-h4 q-py-md q-px-xl">
        {{ newsItem?.name }}
      </div>
      <div class="text-h6 q-pa-md q-px-xl" v-html="newsItem?.description"></div>
      <div class="text-h6 q-pa-md q-px-xl">{{ newsItem?.created_at }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { getNew } from "components/news/service/newsService";
import { useNewsStore } from "stores/news-store";

export default defineComponent({
  name: "NewsDetaiils",
  setup() {
    const r = useRoute();
    const id = r.params.id;
    getNew(id);
    const store = useNewsStore();
    const newsItem = computed(() => store.newItem);
    return { newsItem };
  },
});
</script>
