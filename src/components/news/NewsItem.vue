<template>
  <q-card class="my-card">
    <img :src="newsItem?.image" height="350px" />

    <q-card-section>
      <q-btn flat :to="`/new/${newsItem.id}`">
        <div class="text-h6">{{ newsItem?.name }}</div>
      </q-btn>
      <div class="text-subtitle2" v-html="newsItem?.description"></div>

    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ newsItem?.date }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsItem",
  props: {newsItem:{
    type: Object,
      required: true
    }},
  setup() {
  },
});
</script>
