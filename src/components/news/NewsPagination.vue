<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="purple"
      :max="10"
      :max-pages="6"
      boundary-numbers
    />
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import {useNewsStore} from "stores/news-store";
import {getNews} from "components/news/service/newsService";

export default defineComponent({
  name: "NewsPagination",
  props: {
    pageData: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useNewsStore()
    const current = ref(1)
    const page = computed(()=> store.page)

    watch(current, (newValue, oldValue) => {
      store.setPage({... page, page: newValue})
      getNews(page)
    });

  },
});
</script>
