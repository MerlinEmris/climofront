<template>
  <q-menu fit anchor="bottom left" self="top start">
    <q-item clickable href="/user/profile">
      <q-item-section>Profile</q-item-section>
    </q-item>
    <q-item clickable @click="logout">
      <q-item-section>Log Out</q-item-section>
    </q-item>
  </q-menu>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserLink",
  props: {},
  setup() {
    const logout = () => {
      // logout
      console.log("logout");
    };
    return {
      logout,
    };
  },
});
</script>
