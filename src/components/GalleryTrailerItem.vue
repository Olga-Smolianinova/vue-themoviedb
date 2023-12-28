<template>
    <li :class="classItem"
    >
      <img 
        :src="movie
            ? 'https://image.tmdb.org/t/p/w342' + movie.poster_path
            : DefaultImg" 
        :alt="movie?.title || ''" 
        :class="classImg" 
        />
  
      <my-button v-if="movie" class="play-icon">
        <play-icon />
      </my-button>
  
      <div class="gallery__item-content">
        <h2>{{ movie?.title || '' }}</h2>
      </div> 
    </li>
  </template>
    
  <script setup>
  import DefaultImg from '../assets/images/default.jpg';
  import MyButton from '@/components/UI/MyButton.vue';
  import PlayIcon from '@/components/UI/Icons/PlayIcon.vue';
  
  const props = defineProps({
    movie: {
        type: Object,
        default: () => {}
    },
    classItem: {
        type: String
    },
    classImg: {
        type: String
    }
  })
  </script>