<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="row justify-between items-center no-wrap full-width">
          <div class="col-2 col-md-1 text-left row no-wrap items-center">
            <q-btn
              class="lt-md"
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
            <div>Yahchal</div>
          </div>
          <div class="row no-wrap gt-sm">
            <EssentialLinkTop
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
          <div class="col-3 col-md-2 text-right">User</div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          <q-toolbar-title> Yahchal </q-toolbar-title>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import EssentialLinkTop from "components/EssentialLinkTop.vue";

const linksList = [
  {
    title: "Blog",
    caption: "Climate blog",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "News",
    caption: "Keep in touch",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Meteo Map",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "About us",
    caption: "Nice to meet you",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    EssentialLinkTop,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
