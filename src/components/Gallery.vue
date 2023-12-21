<template>
    <h2 
      class="section__title"
    >
        {{title}}
    </h2>
      <ul :class="className">
        <template v-if="movies?.length">
          <gallery-item
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
          />
        </template>
        <template v-else>
          <gallery-item
            v-for="(movie, idx) in 10"
            :key="idx"
          />
        </template>
     </ul>
  </template>
  
  <script setup>
    import GalleryItem from './GalleryItem.vue';

    const props = defineProps({
      movies: {
        type: Array,
        required: true
      },
      title: {
        type: String
      },
      className: {
        type: String,
        default: ''
      }
    })
  </script>