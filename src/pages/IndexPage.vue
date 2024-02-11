<template>
  <q-page >
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    <h3 class="text-center">News</h3>
    <NewsList :news-list="news"/>
  </q-page>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import NewsList from "components/news/NewsList.vue";
import {useNewsStore} from "stores/news-store";
import {useQuasar} from "quasar";
import {getNews} from "components/news/service/newsService";

export default defineComponent({
  name: "IndexPage",
  components: {NewsList},
  setup(){
    const slide  = ref(1)
    const store = useNewsStore();
    const $q = useQuasar();

    getNews(1);

    const news = computed(() => store.news);
    const page = computed(() => store.page);
    return {slide, news, page}
  }
});
</script>
