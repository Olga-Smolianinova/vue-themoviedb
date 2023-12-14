<template>
  <navbar />

  <main>
      <section class="hero background">
        <h1 class="hero__title">Ласкаво просимо.</h1>
        <h2 class="hero__subtitle">
          Мільйони фільмів, серіалів і персон.
          Досліджуйте зараз.
        </h2>
          
        <search-form />
      </section>

      <section class="section trands">
        <div class="container">
          <gallery
            :movies="store.trendingMovies"
            title="У тренді"
            className="gallery"
            v-if="!store.isTrendingMoviesLoading"
          />
        </div>
      </section>

      <section class="section">
        <div class="container">
          <gallery
            :movies="store.popularMovies"
            title="Що є популярним"
            className="gallery"
            v-if="!store.isPopMoviesLoading"
          />
        </div>
      </section>
  </main>

  <navfooter />
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue';
  import SearchForm from '@/components/SearchForm.vue';
  import Navfooter from '@/components/Footer.vue';
  import Gallery from '@/components/Gallery.vue';
  import { useHomePageStore } from '@/store/homeModule';
  import { onMounted } from 'vue';

  const store = useHomePageStore();

  onMounted(async() => {
    await store.fetchTrendingMovies();
    await store.fetchPopularMovies();
  })
  
</script>

<style lang="scss">
  $primary-background-color: rgba(13, 37, 65, 1);

  .background {
    background-image: linear-gradient(to right, 
    rgba($primary-background-color, 0.8) 0%, 
    rgba($primary-background-color, 0) 100%), 
    url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg');
  }
</style>