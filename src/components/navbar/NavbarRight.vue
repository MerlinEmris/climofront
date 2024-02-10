<template>
  <q-btn flat>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img
            :src="
              user.image ? user.image : 'https://cdn.quasar.dev/img/avatar6.jpg'
            "
            draggable="false"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>{{ user.username }}</q-item-section>
    </q-item>
    <UserLink />
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";
import UserLink from "src/components/navbar/UserLink.vue";
import { useAuthStore } from "src/stores/auth-store";
import { computed } from "vue";
export default defineComponent({
  name: "NavbarRight",
  components: { UserLink },
  setup() {
    const store = useAuthStore();
    const user = computed(() => store.user);
    return { user };
  },
});
</script>
