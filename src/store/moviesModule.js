import { defineStore } from 'pinia';
import apiAxios from '@/composables/useApi';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useMoviesPageStore = defineStore('movies', {
  state: () => ({
    isLoading: false,
    movies: [],
    page: 1,
    totalPages: 0,
    language: 'uk-UA',
    limit: 20
  }),

  actions: {
    async fetchNowPlayingMovies() {
      try {
        this.iLoading = true;

        const response = await apiAxios.get(`/movie/now_playing`, {
          params: {
            page: this.page,
            language: this.language
          },
        });

        this.totalPages = response.data.total_pages;
        this.movies = response.data.results;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isLoading = false;
      }
    },

    async loadMoreMovies() {
      try {
        this.isLoading = true;
        this.page += 1;
        const response = await apiAxios.get(`/movie/now_playing`, {
          params: {
            page: this.page,
            language: this.language,
          },
        });
        this.totalPages = response.data.total_pages;
        this.movies = [...this.movies, ...response.data.results];
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isLoading = false;
      }
    },
  },
});
