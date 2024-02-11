<template>
  <q-card class="my-card">
    <q-img :src="newsItem?.image" :ratio="2 / 1" />

    <q-card-section>
      <div class="text-h3 q-py-md q-px-xl">{{ newsItem?.name }}</div>
      <div class="text-h5 q-pa-md q-px-xl" v-html="newsItem?.description"></div>
      <div class="text-h5 q-pa-md q-px-xl">{{ newsItem?.author }}</div>
      <div class="text-h5 q-pa-md q-px-xl">{{ newsItem?.created_at }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { getBlog } from "components/blog/service/blogService";
import { useBlogStore } from "src/stores/blog-store";

export default defineComponent({
  name: "BlogDetails",
  setup() {
    const r = useRoute();
    const id = r.params.id;
    getBlog(id);
    const store = useBlogStore();
    const newsItem = computed(() => store.blogItem);
    return { newsItem };
  },
});
</script>
