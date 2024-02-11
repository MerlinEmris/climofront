<template>
  <q-card class="my-card">
    <q-img :src="newsItem?.image" :ratio="2 / 1" />

    <q-card-section>
      <q-btn flat :to="`/blog/${newsItem.id}`">
        <div class="">{{ newsItem?.name }}</div>
      </q-btn>
      <div class="flex justify-between items-end">
        <div>{{ newsItem?.author }}</div>
        <div>{{ newsItem?.created_at }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogItem",
  props: {
    newsItem: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
