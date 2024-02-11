<template>
  <div class="q-pa-md row items-center justify-center q-gutter-md">
    <div class="col-12 col-sm-3" v-for="(a, index) in newsList" :key="index">
      <BlogItem :news-item="a" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BlogItem from "./BlogItem.vue";

export default defineComponent({
  name: "NewsList",
  components: { BlogItem },
  props: {
    newsList: {
      type: Array,
      required: true,
    },
  },
  setup() {},
});
</script>
