<template>
  <h2 class="section__title">
    {{ title }}
  </h2>
  <ul :class="className">
    <template v-if="movies?.length">
      <gallery-item 
        v-for="movie in movies" 
        :key="movie.id" 
        :movie="movie"
        classItem="gallery__item"
        classImg="gallery__item-image"
      />
    </template>
    <template v-else>
      <gallery-item 
        v-for="(movie, idx) in 10" 
        :key="idx"
        classItem="gallery__item"
        classImg="gallery__item-image"
      />
    </template>
  </ul>
</template>
  
<script setup>
  import GalleryItem from './GalleryItem.vue';

  const props = defineProps({
    movies: {
      type: Array
    },
    title: {
      type: String
    },
    className: {
      type: String
    }
  })
</script>