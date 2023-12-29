<template>
  <my-header />

  <main>
    <section class="section movies">
      <div v-if="store.movies?.length > 0">
        <ul class="movies__gallery">
          <gallery-item
            v-for="movie in store.movies"
            :key="movie.id"
            :movie="movie"
            classItem="movies__gallery-item"
            classImg="movies__gallery-item__image"
          />
        </ul>

        <my-button
          v-if="hideButton" 
          :loading="store.isLoading"
          @click="store.loadMoreMovies"
          class="btn margin-auto"
        >
          Завантажити більше
        </my-button>
      </div>

      <template v-else>
          <my-spinner v-if="store.isLoading"/>
          <p v-else>Немає даних</p>
      </template>
    </section>
  </main>
  
  <my-footer />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import MyHeader from '@/components/Header.vue';
  import MyFooter from '@/components/Footer.vue';
  import { useMoviesPageStore } from '@/store/moviesModule';
  import GalleryItem from '@/components/GalleryItem.vue';
  import MyButton from '@/components/UI/MyButton.vue';
  import MySpinner from '@/components/UI/MySpinner.vue';
  
  const store = useMoviesPageStore();
  const hideButton = computed(() => store.totalPages > store.page);

  onMounted(async() => {
    await store.fetchNowPlayingMovies()
  });

  const props = defineProps({
    movies: {
      type: Array,
      default: () => []
    }
  })
</script>