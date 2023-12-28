<template>
    <my-header />

    <main>
        <section 
            :style="posterBackground"
            class="banner movie" 
        >
                <movie-card 
                    :movie="store.movie" 
                />
        </section>
    </main>

    <my-footer />
</template>

<script setup>
    import { computed, onMounted, onBeforeUnmount } from 'vue';
    import { useRoute } from 'vue-router';
    import { useMovieIdPageStore } from '@/store/movieIdModule';
    import MyHeader from '@/components/Header.vue';
    import MovieCard from '@/components/MovieCard.vue';
    import MyFooter from '@/components/Footer.vue';

    const router = useRoute();
    const store = useMovieIdPageStore();

    const movieId = router.params.id;
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

    onMounted(async () => movieId && await store.fetchSelectedMovie(movieId));

    onBeforeUnmount(() => store.movie = null);

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