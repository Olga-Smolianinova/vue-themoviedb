<template>
    <li 
      :class="className 
      ? 'movies-gallery-item' 
      : 'gallery-item'"
       @click="$router.push(`/movies/${movie.id}`)"
    >
      <img
        :src="movie 
        ? 'https://image.tmdb.org/t/p/original'+ movie.poster_path 
        : DefaultImg"
        :alt="movie?.title || ''"
        width=""
        :class="className 
        ? 'movies-gallery-item-image' 
        : 'gallery-item-image'"
      />
      <div class="content">
        <h2>{{ movie?.title || '' }}</h2>
        <p>{{ movie?.release_date || '' }}</p> 
      </div>  
    </li>
  </template>
  
  <script setup>
    import DefaultImg from '../assets/images/default.jpg';
    
    const props = defineProps({
      movie: {
          type: Object,
          default: () => {}
        },
      className: {
        type: Boolean,
        default: false
      }
    })
  </script>