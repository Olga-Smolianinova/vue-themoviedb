<template>
  <my-header />

  <main>
    <section class="banner banner--background">
      <h1 class="banner__title">Ласкаво просимо.</h1>
      <h2 class="banner__subtitle">Мільйони фільмів, серіалів і персон.
        Досліджуйте зараз.</h2>

      <search-form />
    </section>

    <section class="section section--background">
      <div class="container">
        <gallery 
          v-if="!store.isTrendingMoviesLoading"
          :movies="store.trendingMovies" 
          title="У тренді" 
          className="gallery"
        />
      </div>
    </section>

    <section 
      :style="posterPath"
      class="section"
    >  
      <div 
        v-if="store.upcomingMovies?.length > 0" 
        class="container"
      >
        <h2 class="section__title">Трейлери</h2>
        <ul class="gallery">
          <gallery-trailer-item
            v-for="movie in store.upcomingMovies" 
            :key="movie.id" 
            :movie="movie"
            classItem="gallery__item"
            classImg="gallery__item-image"
            @mouseover="getTrailerPosterPath(movie?.poster_path)"
            @click="getTrailerKey(movie.id)"
          />
        </ul>
      </div>
    </section>
    <my-dialog 
      v-model:show="dialogVisible"
      className="dialog__trailer"
    >
      <template v-if="movieIdStore?.trailer?.key">
        <iframe
          width="100%" 
          height="100%" 
          :src="`https://www.youtube.com/embed/${movieIdStore.trailer.key}`" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </template>
      <template v-else>
          <my-spinner v-if="movieIdStore?.trailer"/>
          <p v-else class="dialog__text">Немає даних</p>
      </template>
    </my-dialog>

    <section class="section">
      <div class="container">
        <gallery 
          v-if="!store.isPopMoviesLoading" 
          :movies="store.popularMovies" 
          title="Що є популярним" 
          className="gallery"
        />
      </div>
    </section>
  </main>
  
  <my-footer />
</template>

<script setup>
  import { ref,  watch, onMounted, onBeforeUnmount } from 'vue';
  import { useHomePageStore } from '@/store/homeModule';
  import { useMovieIdPageStore } from '@/store/movieIdModule';
  import MyHeader from '@/components/Header.vue';
  import SearchForm from '@/components/SearchForm.vue';
  import MyFooter from '@/components/Footer.vue';
  import Gallery from '@/components/Gallery.vue';
  import GalleryTrailerItem from '../components/GalleryTrailerItem.vue';
  import MyDialog from '@/components/UI/MyDialog.vue';
  import MySpinner from '@/components/UI/MySpinner.vue';

  const store = useHomePageStore();
  const movieIdStore = useMovieIdPageStore();

  const dialogVisible = ref(false);
  const posterPath = ref('');

  onMounted(async () => {
    await store.fetchTrendingMovies();
    await store.fetchPopularMovies();
    await store.fetchUpcomingMovies();

    if(store.upcomingMovies?.length) {
      const defaultTrailerPath = store.upcomingMovies.find(el => !!el)?.poster_path;
      getTrailerPosterPath(defaultTrailerPath);
    }
  });
  onBeforeUnmount(() => movieIdStore.trailer = null);

  watch(() => dialogVisible.value, value => {
    if(!value) {
      movieIdStore.trailer = null
    }
  })

  const getTrailerKey = (movieId) => {
    movieIdStore.fetchSelectedMovieVideo(movieId);
    dialogVisible.value = true;
  };

  const getTrailerPosterPath = (trailerPath) => {
    const backgroundColor = '3, 37, 65, 0.75';
    const gradient = `linear-gradient(to right,
    rgba(${backgroundColor}) 0%, 
    rgba(${backgroundColor}) 100%)`;
    
    posterPath.value = trailerPath && 
    `background-image: ${gradient}, url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${trailerPath}'); 
    color: #ffffff;`
  };
</script>