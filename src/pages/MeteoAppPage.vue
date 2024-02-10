<template>
  <q-page class="flex no-padding no-margin"
    ><iframe
      src="https://www.ventusky.com/?p=38.8;59.1;5&l=temperature-2m"
      width="100%"
    ></iframe>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MeteoAppPage",
});
</script>
