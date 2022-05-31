import axios from "axios";
const baseURL = "https://62863528f0e8f0bb7c1250fb.mockapi.io";

export const movieServices = {
  getAllMovies() {
    const movies = axios.get(baseURL + "/movies").then((res) => res.data);
    return movies;
  },

  deleteMovie(id) {
    const movies = axios
      .delete(baseURL + "/movies/" + id)
      .then((res) => res.data);
    return movies;
  },

  addMovie(data) {
    const movies = axios
      .post(baseURL + "/movies", data)
      .then((res) => res.data);
    return movies;
  },

  updateMovie(id, newMovie) {
    const movies = axios
      .put(baseURL + "/movies/" + id, newMovie)
      .then((res) => res.data);
    return movies;
  },

  getMovieById(id) {
    const movies = axios.get(baseURL + "/movies/" + id).then((res) => res.data);
    return movies;
  },

  getFavMovies() {
    const movies = axios.get(baseURL + "/movies").then(res => {
      return res.data.filter(newMovie => newMovie.isFav === true);
    });
    return movies;
  },

  getSearch(data) {
    const search = axios.get(`${baseURL}/movies`).then(res => {
        return res.data.filter(movie => {
            let cut = data.length;
            return movie.name.slice(0, cut) === data;
        })
    })
    return search;
}

};
