import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

const toast = useToast();
const movies = localStorage.getItem('movies');

export const useLibraryPageStore = defineStore('library', {
  state: () => ({
    watchlist: movies ? JSON.parse(movies) : []
  }),

  actions: {
    addToLibrary(movie) {
      try {
        const film = this.watchlist.find(el => el.id === movie.id);

        if (film) {
          const filteredFilms = this.watchlist.filter(
            item => item.id !== film.id,
          );
          this.watchlist = filteredFilms;
          toast.success(`Фільм "${movie.title}" видалений з бібліотеки`);
        } else {
          this.watchlist.push({ ...movie, isWatched: false });
          toast.success(`Фільм "${movie.title}" доданий до бібліотеки`);
        }

        localStorage.setItem('movies', JSON.stringify(this.watchlist));
      } catch (error) {
        toast.error('Щось пішло не так... Спробуйте ще раз');
      }
    }
  }
});
