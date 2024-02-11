<template>
  <q-card class="my-card">
    <!-- <img  height="350px" /> -->
    <q-img :src="newsItem?.image" :ratio="2 / 1"></q-img>

    <q-card-section>
      <q-btn flat :to="`/new/${newsItem.id}`">
        <div class="">{{ newsItem?.name }}</div>
      </q-btn>
      <!-- <div class="text-subtitle2" v-html="newsItem?.description"></div> -->
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ newsItem?.created_at }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsItem",
  props: {
    newsItem: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
