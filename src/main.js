import { fetchMovies } from './helpers/fetchMovies';
import { createMovieCard } from './helpers/movieCardFunctions';

const showMovies = (movies) => {
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    document.querySelector('body').appendChild(movieCard);
  });
};

window.onload = async () => {
  const movies = await fetchMovies();
  showMovies(movies);
};
