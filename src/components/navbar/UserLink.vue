<template>
  <q-menu fit anchor="bottom left" self="top start">
    <q-item clickable href="/user/profile">
      <q-item-section>Profile</q-item-section>
    </q-item>
    <q-item clickable @click="logoutAction">
      <q-item-section>Log Out</q-item-section>
    </q-item>
  </q-menu>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { logout } from "components/auth/services/authService";
export default defineComponent({
  name: "UserLink",
  props: {},
  setup() {
    const router = useRouter();
    const logoutAction = () => {
      // logout
      logout();
      router.push("/auth/login");
    };
    return {
      logoutAction,
    };
  },
});
</script>
