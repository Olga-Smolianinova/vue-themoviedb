import { defineStore } from 'pinia';
import apiAxios from '@/composables/useApi';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useHomePageStore = defineStore('home', {
  state: () => ({
    isTrendingMoviesLoading: false,
    trendingMovies: [],

    isPopMoviesLoading: false,
    popularMovies: [],

    page: 1,
    totalPages: 0,
    searchQuery: '',
    language: 'uk-UA',
    limit: 20,
  }),

  actions: {
    async fetchTrendingMovies() {
      try {
        this.isTrendingMoviesLoading = true;

        const response = await apiAxios.get(`/trending/movie/day`, {
          params: {
            page: this.page,
            language: this.language,
          },
        });
        this.totalPages = Math.ceil(response.data.total_pages / this.limit);
        this.trendingMovies = response.data.results;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isTrendingMoviesLoading = false;
      }
    },

    async fetchPopularMovies() {
      try {
        this.isPopMoviesLoading = true;

        const response = await apiAxios.get(`/movie/popular`, {
          params: {
            page: this.page,
            language: this.language,
          }
        });
        this.totalPages = Math.ceil(response.data.total_pages / this.limit);
        this.popularMovies = response.data.results;
      } catch (err) {
        toast.error(err?.message || 'Помилка');
      } finally {
        this.isPopMoviesLoading = false;
      }
    }
  }
});
