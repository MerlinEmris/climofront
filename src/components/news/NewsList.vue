<template>
  <div class="q-pa-md row items-center justify-center q-gutter-md">
    <div class="col-12 col-md-3" v-for="(a, index) in newsList" :key="index">
      <NewsItem :news-item="a" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NewsItem from "components/news/NewsItem.vue";

export default defineComponent({
  name: "NewsList",
  components: { NewsItem },
  props: {
    newsList: {
      type: Array,
      required: true,
    },
  },
  setup() {},
});
</script>
