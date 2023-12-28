<template>
  <my-header />

  <main>
    <section class="section movies">
      <div v-if="store?.watchlist.length > 0">
        <ul class="movies__gallery">
          <gallery-item 
            v-for="movie in store.watchlist" 
            :key="movie.id" 
            :movie="movie" 
            classItem="movies__gallery-item"
            classImg="movies__gallery-item__image"
          />
        </ul>
      </div>
      <p v-else>Ви не додали жодного фільму до Бібліотеки</p>
    </section>
  </main>

  <my-footer />
</template>
  
<script setup>
  import { useLibraryPageStore } from '@/store/libraryModule';
  import MyHeader from '@/components/Header.vue';
  import MyFooter from '@/components/Footer.vue';
  import GalleryItem from '@/components/GalleryItem.vue';

  const store = useLibraryPageStore();
</script>