import { defineStore } from 'pinia';
import apiAxios from '../composables/useApi';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useMovieIdPageStore = defineStore('movieId', {
  state: () => ({
    isLoading: false,
    movie: null,
    isCastLoading: false,
    cast: [],
    crew: [],
    language: 'uk-UA'
  }),

  actions: {
    async fetchSelectedMovie(movieId) {
      try {
        this.isLoading = true;

        const response = await apiAxios.get(`/movie/${movieId}`, {
          params: {
            language: this.language,
          },
        });
        this.movie = response.data;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCast(movieId) {
      try {
        this.isCastLoading = true;

        const response = await apiAxios.get(`/movie/${movieId}/credits`, {
          params: {
            language: this.language,
          },
        });
        this.cast = response.data.cast;
        this.crew = response.data.crew;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isCastLoading = false
      }
    }
  }
})
