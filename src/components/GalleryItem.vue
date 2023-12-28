<template>
  <li :class="classItem">
    <img 
      :src="movie
        ? 'https://image.tmdb.org/t/p/w342' + movie.poster_path
        : DefaultImg" 
      :alt="movie?.title || ''" 
      :class="classImg"
      @click="$router.push(`/movies/${movie.id}`)"
    />

    <my-button 
      v-if="movie"  
      :class="['heart-icon', {
        'favorite': checkingLibrary
      }]"
      @click="libraryStore.addToLibrary(movie)"
    >
      <heart-icon />
    </my-button>

    <div 
      class="gallery__item-content"
      @click="$router.push(`/movies/${movie.id}`)"
    >
      <h2>{{ movie?.title || '' }}</h2>
      <p class="gallery__item-content__text">{{ getFormattedReleaseDate }}</p>
    </div> 
  </li>
</template>
  
<script setup>
  import { computed } from 'vue';
  import { format, isValid } from "date-fns";
  import ukLocale from 'date-fns/locale/uk';
  import { useLibraryPageStore } from '@/store/libraryModule';
  import DefaultImg from '../assets/images/default.jpg';
  import MyButton from '@/components/UI/MyButton.vue';
  import HeartIcon from '@/components/UI/Icons/HeartIcon.vue';

  const libraryStore = useLibraryPageStore();

  const checkingLibrary = computed(() => libraryStore.watchlist.some(el => el.id === props?.movie?.id));

  const getFormattedReleaseDate = computed(() => {
    const releaseDate = props?.movie?.release_date;

    return releaseDate && isValid(new Date(releaseDate))
      ? format(new Date(releaseDate), 'dd MMM yyyy', { locale: ukLocale }) : '';
  });

  const props = defineProps({
    movie: {
      type: Object,
      default: () => { }
    },
    classItem: {
      type: String
    },
    classImg: {
      type: String
    }
  })
</script>