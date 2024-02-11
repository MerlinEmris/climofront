<template>
  <q-page class="flex flex-center">
    <iframe
      width="1080"
      height="600"
      src="https://www.youtube.com/embed/lE6RYpe9IT0?si=YXFyskaGDNczkQBM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RelaxPage",
});
</script>
