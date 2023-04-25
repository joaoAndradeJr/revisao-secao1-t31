import fakeAPI from "./fakeAPI";

export const fetchMovies = async () => {
  return fakeAPI('https://fakemoviedb.org/movies')
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error.message));
};
