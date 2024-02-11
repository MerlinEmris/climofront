<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div
          class="row justify-between items-center no-wrap full-width no-margin no-padding"
        >
          <div class="col-4 col-md-2 text-left row no-wrap items-center">
            <q-btn
              class="lt-md"
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
            <div>
              <q-btn class="row no-wrap" flat href="/"
                ><img
                  class="gt-sm"
                  src="../assets/yahchal.png"
                  width="36" /><img width="100" src="../assets/logotext.png"
              /></q-btn>
            </div>
          </div>
          <div class="row no-wrap gt-sm">
            <EssentialLinkTop
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
          <div class="col-8 col-md-3 text-right"><NavbarRight /></div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-blue-8">
      <q-list>
        <q-item-label header>
          <q-toolbar-title class="row no-wrap items-center"
            ><img class="lt-md" src="../assets/yahchal.png" width="36" />
            <img width="100" src="../assets/logotext.png" />
          </q-toolbar-title>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class=""
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
import EssentialLink from "components/navbar/EssentialLink.vue";
import EssentialLinkTop from "components/navbar/EssentialLinkTop.vue";
import NavbarRight from "components/navbar/NavbarRight.vue";

const linksList = [
  {
    title: "Blog",
    caption: "Climate blog",
    icon: "school",
    link: "/blogs",
  },
  {
    title: "News",
    caption: "Keep in touch",
    icon: "code",
    link: "/news",
  },
  {
    title: "Meteo Map",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "/meteomap",
  },
  {
    title: "Climate Sim",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "/simulate",
  },
  {
    title: "Relax",
    caption: "Calm down",
    icon: "chat",
    link: "/relax",
  },
  {
    title: "About us",
    caption: "Nice to meet you",
    icon: "record_voice_over",
    link: "/aboutus",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    EssentialLinkTop,
    NavbarRight,
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
