<template>
  <q-page class="flex flex-center">
    <NewsDetaiils />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import NewsDetaiils from "components/news/NewsDetails.vue";

export default defineComponent({
  name: "NewsDetailPage",
  components: {NewsDetaiils},
});
</script>
