<template>
  <q-card class="my-card">
    <img :src="newsItem?.image"  />

    <q-card-section>
      <q-btn flat >
        <div class="text-h3 q-py-md">{{ newsItem?.name }}</div>
      </q-btn>
      <div class=" text-h5 q-pa-md" v-html="newsItem?.description"></div>
      <div class=" text-h5 q-pa-md">{{ newsItem?.created_at }}</div>

    </q-card-section>


  </q-card>
</template>

<script>
import {computed, defineComponent} from "vue";
import {useRoute} from "vue-router";
import {getNew} from "components/news/service/newsService";
import {useNewsStore} from "stores/news-store";

export default defineComponent({
  name: "NewsDetaiils",
  setup() {
    const r = useRoute();
    const id = r.params.id;
    getNew(id);
    const store = useNewsStore();
    const newsItem = computed(()=> store.newItem)
    return { newsItem };
  },
});
</script>
