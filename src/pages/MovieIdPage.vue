<template>
    <navbar />

    <main>
        <section 
            class="hero movie" 
            :style="posterBackground"
        >
                <movie-card 
                    :movie="store.movie" 
                />
        </section>
    </main>

    <navfooter />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMovieIdPageStore } from '@/store/movieIdModule';
import Navbar from '@/components/Navbar.vue';
import MovieCard from '@/components/MovieCard.vue';
import Navfooter from '@/components/Footer.vue';

const store = useMovieIdPageStore();
const router = useRouter();

const movieId = router.currentRoute.value.params.id;
const posterBackground = computed(() => {
    const backgroundColor = '31.5, 31.5, 31.5';
    const gradient = `linear-gradient(to right, 
    rgba(${backgroundColor}, 1) 
    calc((50vw - 170px) - 340px), 
    rgba(${backgroundColor}, 0.84) 50%, 
    rgba(${backgroundColor}, 0.84) 100%)`;

    return store 
    && store?.movie 
    && `background-image: ${gradient}, url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${store?.movie?.backdrop_path}')`
});

onMounted(async () => {
    movieId && await store.fetchSelectedMovie(movieId);
    movieId && await store.fetchCast(movieId);
});

const props = defineProps({
    movie: {
        type: Object,
        default: () => {}
    },
    cast: {
        type: Array,
        default: () => []
    }
})
</script>