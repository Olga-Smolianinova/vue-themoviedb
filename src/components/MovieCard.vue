<template>
    <div class="card">
        <div class="card__img">
            <img 
                :src="movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
                    : DefaultImg" 
                :alt="movie?.original_title" 
                width="342"
                height="480"
            />
        </div>

        <div v-if="movie" class="card__info">
            <h2 class="card__title">
                {{ movie?.title }}
                {{ getReleaseYear }}
            </h2>
            <p class="card__text">
                {{ getFormattedReleaseDate }}
                &#x2022;
                {{ getGenres }}
                &#x2022;
                {{ getHour }}
            </p>
            <p class="card__text">
                <i>{{ movie?.tagline || '' }}</i>
            </p>

            <h3 v-if="movie.overview">Опис</h3>
            <p class="card__text">
                {{ movie?.overview }}
            </p>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { format, isValid } from "date-fns";
    import DefaultImg from '../assets/images/default.jpg';

    const getReleaseYear = computed(() => {
        const year = props.movie?.release_date.slice(0, 4);

        return year ? `(${year})` : ''
    });
    const getGenres = computed(() => {
        const genres = props?.movie?.genres?.length ? props.movie.genres.map(el => el.name).join(', ') : '';

        return genres
    });
    const getHour = computed(() => {
        const minutes = props.movie?.runtime;
        const hours = Math.floor(minutes / 60);
        const minutesOver = minutes % 60;

        return props.movie?.runtime ? `${hours}год ${minutesOver}хв` : '';
    });

    const getFormattedReleaseDate = computed(() => {
        const releaseDate = props?.movie?.release_date;

        return releaseDate && isValid(new Date(releaseDate))
            ? format(new Date(releaseDate), 'dd-MM-yyyy') : '';
    });

    const props = defineProps({
        movie: {
            type: Object,
            default: () => { }
        }
    })
</script>