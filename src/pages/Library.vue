<template>
    <navbar />
  
    <main>
      <section class="section movies">
        <div 
          class="container"
          v-if="store?.watchlist.length > 0"  
        >
          <ul class="movies__gallery">
            <gallery-item
              v-for="movie in store.watchlist"
              :key="movie.id"
              :movie="movie"
              className
            />
          </ul>
        </div>
  
        <template v-else>
            <my-spinner v-if="store.isLoading"/>
            <p v-else>Ви не додали жодного фільму до Бібліотеки</p>
        </template>
      </section>
    </main>
    
    <navfooter />
  </template>
  
  <script setup>
    import Navbar from '@/components/Navbar.vue';
    import Navfooter from '@/components/Footer.vue';
    import { useLibraryPageStore } from '../store/libraryModule';
    import GalleryItem from '@/components/GalleryItem.vue';
    import MySpinner from '@/components/UI/MySpinner.vue';

    const store = useLibraryPageStore();
  
    const props = defineProps({
      movies: {
        type: Array,
        default: () => []
      }
    })
  </script>