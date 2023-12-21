<template>
  <li :class="className
    ? 'movies-gallery-item'
    : 'gallery-item'" @click="$router.push(`/movies/${movie.id}`)">
    <img :src="movie
      ? 'https://image.tmdb.org/t/p/original' + movie.poster_path
      : DefaultImg" :alt="movie?.title || ''" :class="className
    ? 'movies-gallery-item-image'
    : 'gallery-item-image'" />

    <my-button
      className="gallery-item-icon"
      @click.stop
    >
      <Icon 
        icon="mdi:heart-outline" 
        width="32" 
        height="32" 
        @click="libraryStore.addToLibrary(movie)"
      />
    </my-button>

    <div class="content">
      <h2>{{ movie?.title || '' }}</h2>
      <p>{{ movie?.release_date || '' }}</p>
    </div>
  </li>
</template>
  
<script setup>
import DefaultImg from '../assets/images/default.jpg';
import { Icon } from '@iconify/vue';
import MyButton from '@/components/UI/MyButton.vue';
import { useLibraryPageStore } from '../store/libraryModule';

const libraryStore = useLibraryPageStore();

const props = defineProps({
  movie: {
    type: Object,
    default: () => { }
  },
  className: {
    type: Boolean,
    default: false
  }
})
</script>