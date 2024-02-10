<template>
  <q-page class="flex no-padding no-margin"
    ><iframe
      src="https://en-roads.climateinteractive.org/scenario.html?v=24.1.0"
      width="100%"
    ></iframe>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SimulateAppPage",
});
</script>
