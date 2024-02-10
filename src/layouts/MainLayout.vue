<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div
          class="row justify-between items-center no-wrap full-width no-margin no-padding"
        >
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
            <div><q-btn flat href="/">Yahchal</q-btn></div>
          </div>
          <div class="row no-wrap gt-sm">
            <EssentialLinkTop
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
          <div class="col-5 col-md-2 text-right">
            <q-btn flat>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img
                      src="https://cdn.quasar.dev/img/avatar6.jpg"
                      draggable="false"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section>Plany plany</q-item-section>
              </q-item>
              <UserLink />
            </q-btn>
          </div>
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
import EssentialLink from "components/navbar/EssentialLink.vue";
import EssentialLinkTop from "components/navbar/EssentialLinkTop.vue";
import UserLink from "src/components/navbar/UserLink.vue";

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
    UserLink,
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
