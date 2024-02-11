<template>
  <q-page class="flex flex-center">
    <BlogDetails />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import BlogDetails from "src/components/blog/BlogDetails.vue";

export default defineComponent({
  name: "BlogDetailPage",
  components: { BlogDetails },
});
</script>
