import { defineStore } from 'pinia';
import apiAxios from '../composables/useApi';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useMovieIdPageStore = defineStore('movieId', {
  state: () => ({
    isLoading: false,
    movie: null,
    
    isMovieVideoLoading: false,
    trailer: null
  }),

  actions: {
    async fetchSelectedMovie(movieId) {
      try {
        this.isLoading = true;

        const response = await apiAxios.get(`/movie/${movieId}`);
        this.movie = response.data;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isLoading = false;
      }
    },

    async fetchSelectedMovieVideo(movieId) {
      try {
        this.isMovieVideoLoading = true;

        const response = await apiAxios.get(`/movie/${movieId}/videos`);
        this.trailer = response.data.results?.length > 0 && response.data.results[0];
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isMovieVideoLoading = false;
      }
    }
  }
})
